import { NextRequest, NextResponse } from 'next/server'
import { 
  createSuccessResponse,
  createErrorResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  newsletterSubscriptionSchema,
  validateRequestBody 
} from '@/lib/validation'
import { 
  withMiddleware,
  withRateLimit,
  withContentTypeValidation 
} from '@/lib/middleware'
import { 
  getEmailService,
  newsletterConfirmationTemplate 
} from '@/lib/email'

/**
 * Mock newsletter database (replace with real database)
 */
interface NewsletterSubscription {
  id: string
  email: string
  subscribedAt: string
  confirmed: boolean
  preferences: {
    topics: string[]
    frequency: 'daily' | 'weekly' | 'monthly'
  }
  gdprConsent: boolean
}

const subscriptions: NewsletterSubscription[] = []

/**
 * Generate confirmation token and URL
 */
function generateConfirmationUrl(email: string): string {
  // In production, generate a secure token and store it in database
  const token = Buffer.from(email).toString('base64')
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/newsletter/confirm?token=${token}`
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletterSubscription(req: NextRequest): Promise<NextResponse> {
  try {
    // Validate request body
    const { email, gdprConsent, interests } = await validateRequestBody(req, newsletterSubscriptionSchema)

    // Check if already subscribed
    const existingSubscription = subscriptions.find(sub => sub.email === email)
    if (existingSubscription) {
      return NextResponse.json(
        createErrorResponse(
          'Email already subscribed',
          'ALREADY_SUBSCRIBED'
        ),
        { status: 409 }
      )
    }

    // Create subscription record (adapting to different schema)
    const subscription: NewsletterSubscription = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email,
      subscribedAt: new Date().toISOString(),
      confirmed: false,
      preferences: {
        topics: interests || ['technology'],
        frequency: 'weekly'
      },
      gdprConsent
    }

    // Save to database (mock)
    subscriptions.push(subscription)

    // Send confirmation email
    const emailService = getEmailService()
    const confirmationUrl = generateConfirmationUrl(email)
    
    const emailVariables = {
      confirmationUrl,
      subscribedTopics: subscription.preferences.topics.join(', '),
      frequency: subscription.preferences.frequency
    }

    const emailSent = await emailService.sendEmail(
      email,
      newsletterConfirmationTemplate,
      emailVariables
    )

    if (!emailSent) {
      console.error('Failed to send confirmation email')
      // In production, you might want to retry or handle this differently
    }

    return NextResponse.json(
      createSuccessResponse({
        message: 'Successfully subscribed! Please check your email to confirm.',
        email: email
      })
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      createErrorResponse(
        'Failed to process subscription',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * Handle newsletter confirmation
 */
async function handleNewsletterConfirmation(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json(
      createErrorResponse(
        'Confirmation token required',
        'MISSING_TOKEN'
      ),
      { status: 400 }
    )
  }

  try {
    // Decode email from token (in production, use proper token validation)
    const email = Buffer.from(token, 'base64').toString()
    
    // Find and confirm subscription
    const subscription = subscriptions.find(sub => sub.email === email)
    if (!subscription) {
      return NextResponse.json(
        createErrorResponse(
          'Invalid confirmation token',
          'INVALID_TOKEN'
        ),
        { status: 400 }
      )
    }

    if (subscription.confirmed) {
      return NextResponse.json(
        createSuccessResponse({
          message: 'Email already confirmed',
          email: email
        })
      )
    }

    // Confirm subscription
    subscription.confirmed = true

    return NextResponse.json(
      createSuccessResponse({
        message: 'Email confirmed successfully! You will start receiving our newsletter.',
        email: email
      })
    )

  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.json(
      createErrorResponse(
        'Failed to confirm subscription',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * POST /api/newsletter - Subscribe to newsletter
 */
export const POST = withApiHandler(
  withMiddleware(
    handleNewsletterSubscription,
    withRateLimit(60000, 10), // 10 requests per minute
    withContentTypeValidation(['application/json'])
  )
)

/**
 * GET /api/newsletter - Confirm newsletter subscription
 */
export const GET = withApiHandler(
  withMiddleware(handleNewsletterConfirmation)
)
