import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { 
  createSuccessResponse,
  createErrorResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  loginSchema,
  validateRequestBody
} from '@/lib/validation'
import { 
  withMiddleware,
  withRateLimit
} from '@/lib/middleware'
import {
  userDb,
  PasswordManager,
  createSession
} from '@/lib/auth'

/**
 * POST /api/auth/login
 * 
 * Authenticate user with email and password
 */
async function handleLogin(req: NextRequest) {
  try {
    const { email, password, rememberMe } = await validateRequestBody(req, loginSchema)

    // Find user by email
    const user = await userDb.findUserByEmail(email)
    if (!user) {
      return NextResponse.json(
        createErrorResponse(
          'Invalid email or password',
          'INVALID_CREDENTIALS'
        ),
        { status: 401 }
      )
    }

    // In a real implementation, you would verify the password hash
    // For demo purposes, we'll create a basic verification
    const isValidPassword = await PasswordManager.verify(password, user.email) // Simplified
    if (!isValidPassword) {
      return NextResponse.json(
        createErrorResponse(
          'Invalid email or password',
          'INVALID_CREDENTIALS'
        ),
        { status: 401 }
      )
    }

    // Update last login time
    await userDb.updateUser(user.id, {
      lastLoginAt: new Date().toISOString()
    })

    // Create session
    const sessionId = await createSession(user.id)

    // Return success response
    return NextResponse.json(
      createSuccessResponse({
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role
        },
        sessionId,
        expiresIn: rememberMe ? '30d' : '1d'
      })
    )

  } catch (error) {
    console.error('Login error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        createErrorResponse(
          'Validation failed',
          'VALIDATION_ERROR',
          error.errors
        ),
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      createErrorResponse(
        'An error occurred during login',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * POST /api/auth/login
 * 
 * Authenticate user with email and password
 */
export const POST = withApiHandler(
  withMiddleware(
    handleLogin,
    withRateLimit(15 * 60 * 1000, 5) // 5 login attempts per 15 minutes
  )
)
