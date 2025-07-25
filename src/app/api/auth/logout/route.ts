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
  deleteSession,
  getSession
} from '@/lib/auth'

/**
 * POST /api/auth/logout
 * 
 * Log out current user and destroy session
 */
async function handleLogout(_req: NextRequest) {
  try {
    // Get current session to verify user is logged in
    const sessionData = await getSession()
    
    if (!sessionData) {
      return NextResponse.json(
        createErrorResponse(
          'No active session found',
          'NO_SESSION'
        ),
        { status: 401 }
      )
    }

    // Delete session and clear cookie
    await deleteSession()

    // Return success response
    return NextResponse.json(
      createSuccessResponse({
        message: 'Logged out successfully'
      })
    )

  } catch (error) {
    console.error('Logout error:', error)
    
    return NextResponse.json(
      createErrorResponse(
        'An error occurred during logout',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * POST /api/auth/logout
 * 
 * Log out current user
 */
export const POST = withApiHandler(
  withMiddleware(
    handleLogout,
    withRateLimit(60 * 1000, 10) // 10 logout attempts per minute
  )
)
