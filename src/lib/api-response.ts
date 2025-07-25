import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    message: string
    code?: string
    details?: any
  }
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

/**
 * Create a standardized success response
 */
export function createSuccessResponse<T>(
  data: T,
  pagination?: ApiResponse<T>['pagination']
): ApiResponse<T> {
  return {
    success: true,
    data,
    ...(pagination && { pagination })
  }
}

/**
 * Create a standardized error response
 */
export function createErrorResponse(
  message: string,
  code?: string,
  details?: any
): ApiResponse {
  const error: ApiResponse['error'] = { message }
  if (code !== undefined) error.code = code
  if (details !== undefined) error.details = details
  
  return {
    success: false,
    error
  }
}

/**
 * Handle API errors and return appropriate responses
 */
export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error)

  if (error instanceof ZodError) {
    return NextResponse.json(
      createErrorResponse(
        'Validation error',
        'VALIDATION_ERROR',
        error.errors
      ),
      { status: 400 }
    )
  }

  if (error instanceof Error) {
    // Don't expose internal errors in production
    const message = process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : error.message

    return NextResponse.json(
      createErrorResponse(message, 'INTERNAL_ERROR'),
      { status: 500 }
    )
  }

  return NextResponse.json(
    createErrorResponse('Unknown error occurred', 'UNKNOWN_ERROR'),
    { status: 500 }
  )
}

/**
 * Wrapper for API route handlers with error handling
 */
export function withApiHandler<T extends any[]>(
  handler: (...args: T) => Promise<NextResponse>
) {
  return async (...args: T): Promise<NextResponse> => {
    try {
      return await handler(...args)
    } catch (error) {
      return handleApiError(error)
    }
  }
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()

  isRateLimited(
    identifier: string, 
    windowMs: number = 60000, // 1 minute
    maxRequests: number = 100
  ): boolean {
    const now = Date.now()
    const requests = this.requests.get(identifier) || []
    
    // Remove old requests outside the window
    const validRequests = requests.filter(
      timestamp => now - timestamp < windowMs
    )
    
    if (validRequests.length >= maxRequests) {
      return true
    }
    
    // Add current request
    validRequests.push(now)
    this.requests.set(identifier, validRequests)
    
    return false
  }

  cleanup(): void {
    // Clean up old entries periodically
    const now = Date.now()
    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter(
        timestamp => now - timestamp < 300000 // 5 minutes
      )
      
      if (validRequests.length === 0) {
        this.requests.delete(key)
      } else {
        this.requests.set(key, validRequests)
      }
    }
  }
}

// Global rate limiter instance
export const rateLimiter = new RateLimiter()

// Clean up rate limiter every 5 minutes
if (typeof window === 'undefined') {
  setInterval(() => {
    rateLimiter.cleanup()
  }, 300000)
}
