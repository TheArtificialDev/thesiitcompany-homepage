import { NextRequest, NextResponse } from 'next/server'
import { 
  createSuccessResponse,
  createErrorResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  withMiddleware,
  withRateLimit
} from '@/lib/middleware'
import {
  getCurrentUser
} from '@/lib/auth'

/**
 * GET /api/auth/me
 * 
 * Get current user profile information
 */
async function handleGetProfile(_req: NextRequest) {
  try {
    // Get current user
    const user = await getCurrentUser()
    
    if (!user) {
      return NextResponse.json(
        createErrorResponse(
          'Authentication required',
          'NOT_AUTHENTICATED'
        ),
        { status: 401 }
      )
    }

    // Return user profile (exclude sensitive data)
    return NextResponse.json(
      createSuccessResponse({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          role: user.role,
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt
        }
      })
    )

  } catch (error) {
    console.error('Profile fetch error:', error)
    
    return NextResponse.json(
      createErrorResponse(
        'An error occurred while fetching profile',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * GET /api/auth/me
 * 
 * Get current user profile
 */
export const GET = withApiHandler(
  withMiddleware(
    handleGetProfile,
    withRateLimit(60 * 1000, 30) // 30 profile requests per minute
  )
)
