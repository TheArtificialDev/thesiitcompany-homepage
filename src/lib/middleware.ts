import { NextRequest, NextResponse } from 'next/server'
import { rateLimiter } from '@/lib/api-response'

/**
 * Get client IP address from request
 */
function getClientIP(request: NextRequest): string {
  const xForwardedFor = request.headers.get('x-forwarded-for')
  const xRealIP = request.headers.get('x-real-ip')
  
  if (xForwardedFor) {
    const firstIP = xForwardedFor.split(',')[0]
    return firstIP ? firstIP.trim() : 'unknown'
  }
  
  if (xRealIP) {
    return xRealIP
  }
  
  // Fallback to a default value since NextRequest doesn't have ip property
  return 'unknown'
}

/**
 * Rate limiting middleware
 */
export function withRateLimit(
  windowMs: number = 60000, // 1 minute
  maxRequests: number = 100
) {
  return (request: NextRequest): NextResponse | null => {
    const ip = getClientIP(request)
    
    if (rateLimiter.isRateLimited(ip, windowMs, maxRequests)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Too many requests. Please try again later.',
            code: 'RATE_LIMIT_EXCEEDED'
          }
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil(windowMs / 1000).toString()
          }
        }
      )
    }
    
    return null
  }
}

/**
 * CORS middleware
 */
export function withCors(
  allowedOrigins: string[] = [
    'https://thesiitcompany.com',
    'https://www.thesiitcompany.com'
  ]
) {
  return (request: NextRequest): NextResponse | null => {
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      const origin = request.headers.get('origin')
      
      const headers = new Headers()
      headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      headers.set('Access-Control-Max-Age', '86400')
      
      if (origin && allowedOrigins.includes(origin)) {
        headers.set('Access-Control-Allow-Origin', origin)
        headers.set('Access-Control-Allow-Credentials', 'true')
      }
      
      return new NextResponse(null, { status: 200, headers })
    }
    
    return null
  }
}

/**
 * Security headers middleware
 */
export function withSecurityHeaders() {
  return (request: NextRequest, response: NextResponse): NextResponse => {
    const headers = new Headers(response.headers)
    
    // Security headers
    headers.set('X-Content-Type-Options', 'nosniff')
    headers.set('X-Frame-Options', 'DENY')
    headers.set('X-XSS-Protection', '1; mode=block')
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    
    // Content Security Policy
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src 'self' fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
    
    headers.set('Content-Security-Policy', csp)
    
    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    })
  }
}

/**
 * Request logging middleware
 */
export function withLogging() {
  return (request: NextRequest): void => {
    const start = Date.now()
    const ip = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    console.log(`[${new Date().toISOString()}] ${request.method} ${request.url} - IP: ${ip} - UA: ${userAgent}`)
    
    // Log response time (this would need to be handled in the response)
    request.headers.set('x-start-time', start.toString())
  }
}

/**
 * Content type validation middleware
 */
export function withContentTypeValidation(allowedTypes: string[] = ['application/json']) {
  return (request: NextRequest): NextResponse | null => {
    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      const contentType = request.headers.get('content-type')
      
      if (!contentType || !allowedTypes.some(type => contentType.includes(type))) {
        return NextResponse.json(
          {
            success: false,
            error: {
              message: 'Invalid content type. Expected: ' + allowedTypes.join(', '),
              code: 'INVALID_CONTENT_TYPE'
            }
          },
          { status: 400 }
        )
      }
    }
    
    return null
  }
}

/**
 * API key validation middleware (for protected endpoints)
 */
export function withApiKeyAuth(requiredApiKey?: string) {
  return (request: NextRequest): NextResponse | null => {
    if (!requiredApiKey) {
      return null // No API key required
    }
    
    const apiKey = request.headers.get('x-api-key') || request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!apiKey || apiKey !== requiredApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Invalid or missing API key',
            code: 'UNAUTHORIZED'
          }
        },
        { status: 401 }
      )
    }
    
    return null
  }
}

/**
 * Compose multiple middleware functions
 */
export function composeMiddleware(
  ...middlewares: Array<(request: NextRequest) => NextResponse | null>
) {
  return (request: NextRequest): NextResponse | null => {
    for (const middleware of middlewares) {
      const response = middleware(request)
      if (response) {
        return response
      }
    }
    return null
  }
}

/**
 * Helper to apply middleware to API routes
 */
export function withMiddleware(
  handler: (request: NextRequest) => Promise<NextResponse>,
  ...middlewares: Array<(request: NextRequest) => NextResponse | null>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    // Apply middleware
    for (const middleware of middlewares) {
      const response = middleware(request)
      if (response) {
        return response
      }
    }
    
    // Apply logging
    withLogging()(request)
    
    try {
      const response = await handler(request)
      
      // Apply security headers
      return withSecurityHeaders()(request, response)
    } catch (error) {
      console.error('API route error:', error)
      
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Internal server error',
            code: 'INTERNAL_ERROR'
          }
        },
        { status: 500 }
      )
    }
  }
}
