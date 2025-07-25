import { NextRequest, NextResponse } from 'next/server'
import { 
  createSuccessResponse,
  createErrorResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  contactFormSchema,
  validateRequestBody 
} from '@/lib/validation'
import { 
  withMiddleware,
  withRateLimit 
} from '@/lib/middleware'
import { 
  getEmailService,
  contactFormTemplate 
} from '@/lib/email'

/**
 * Mock contact submissions database (replace with real database)
 */
interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  jobTitle?: string
  message: string
  serviceInterest?: string
  budget?: string
  timeline?: string
  submittedAt: string
  status: 'new' | 'reviewed' | 'responded' | 'closed'
  source: string
}

const contactSubmissions: ContactSubmission[] = []

/**
 * Handle contact form submission
 */
async function handleContactSubmission(req: NextRequest): Promise<NextResponse> {
  try {
    // Validate request body
    const formData = await validateRequestBody(req, contactFormSchema)

    // Create contact submission record
    const submission: ContactSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      status: 'new',
      source: 'website-contact-form'
    }

    // Add optional fields if they exist
    if (formData.company) submission.company = formData.company
    if (formData.phone) submission.phone = formData.phone
    if (formData.jobTitle) submission.jobTitle = formData.jobTitle
    if (formData.serviceInterest) submission.serviceInterest = formData.serviceInterest
    if (formData.budget) submission.budget = formData.budget
    if (formData.timeline) submission.timeline = formData.timeline

    // Save to database (mock)
    contactSubmissions.push(submission)

    // Send notification email to company
    const emailService = getEmailService()
    const companyEmail = process.env.COMPANY_EMAIL || 'info@thesiitcompany.com'
    
    const emailVariables = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company || 'Not specified',
      subject: `Contact Form: ${formData.serviceInterest || 'General Inquiry'}`,
      message: formData.message,
      submittedAt: new Date().toLocaleString()
    }

    const emailSent = await emailService.sendEmail(
      companyEmail,
      contactFormTemplate,
      emailVariables
    )

    if (!emailSent) {
      console.error('Failed to send contact form notification email')
      // In production, you might want to retry or queue this
    }

    // Log contact submission for analytics
    console.log('Contact form submission:', {
      id: submission.id,
      email: formData.email,
      company: formData.company,
      serviceInterest: formData.serviceInterest,
      budget: formData.budget,
      timeline: formData.timeline,
      timestamp: submission.submittedAt
    })

    return NextResponse.json(
      createSuccessResponse({
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        submissionId: submission.id
      })
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      createErrorResponse(
        'Failed to process contact form',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * Get contact submissions (admin only - would need authentication in production)
 */
async function handleGetContactSubmissions(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const status = searchParams.get('status')

  try {
    // Filter submissions
    let filteredSubmissions = [...contactSubmissions]
    
    if (status && status !== 'all') {
      filteredSubmissions = filteredSubmissions.filter(sub => sub.status === status)
    }

    // Sort by newest first
    filteredSubmissions.sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    )

    // Pagination
    const total = filteredSubmissions.length
    const totalPages = Math.ceil(total / limit)
    const start = (page - 1) * limit
    const end = start + limit
    const submissions = filteredSubmissions.slice(start, end)

    return NextResponse.json(
      createSuccessResponse({
        submissions,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      })
    )

  } catch (error) {
    console.error('Get contact submissions error:', error)
    return NextResponse.json(
      createErrorResponse(
        'Failed to retrieve contact submissions',
        'INTERNAL_ERROR'
      ),
      { status: 500 }
    )
  }
}

/**
 * POST /api/contact - Submit contact form
 */
export const POST = withApiHandler(
  withMiddleware(
    handleContactSubmission,
    withRateLimit(60000, 5) // 5 requests per minute
  )
)

/**
 * GET /api/contact - Get contact submissions (admin)
 */
export const GET = withApiHandler(
  withMiddleware(handleGetContactSubmissions)
)
