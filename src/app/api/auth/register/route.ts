import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { 
  createSuccessResponse,
  createErrorResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  registerSchema,
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
 * POST /api/auth/register
 * 
 * Register a new user account
 */
async function handleRegister(req: NextRequest) {
  try {
    const { name, email, password } = await validateRequestBody(req, registerSchema)

    // Check if user already exists
    const existingUser = await userDb.findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        createErrorResponse(
          'An account with this email already exists',
          'USER_EXISTS'
        ),
        { status: 409 }
      )
    }

    // Hash password (simplified for demo) - store for production use
    await PasswordManager.hash(password)

    // Create user account
    const user = await userDb.createUser({
      email,
      name,
      role: 'user' // Default role
    })

    // Create session for immediate login
    const sessionId = await createSession(user.id)

    // Return success response (exclude sensitive data)
    return NextResponse.json(
      createSuccessResponse({
        message: 'Account created successfully! Welcome aboard.',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role
        },
        sessionId
      })
    )

  } catch (error) {
    console.error('Registration error:', error)
    
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
        'An error occurred during registration',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * POST /api/auth/register
 * 
 * Register a new user account
 */
export const POST = withApiHandler(
  withMiddleware(
    handleRegister,
    withRateLimit(15 * 60 * 1000, 3) // 3 registration attempts per 15 minutes
  )
)
