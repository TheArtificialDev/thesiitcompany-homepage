import { z } from 'zod'

/**
 * Common validation schemas
 */

// Email validation schema
export const emailSchema = z
  .string()
  .email('Please enter a valid email address')
  .min(1, 'Email is required')

// Name validation schema
export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be less than 50 characters')
  .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')

// Company validation schema
export const companySchema = z
  .string()
  .min(2, 'Company name must be at least 2 characters')
  .max(100, 'Company name must be less than 100 characters')

// Phone validation schema
export const phoneSchema = z
  .string()
  .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
  .optional()

// Message validation schema
export const messageSchema = z
  .string()
  .min(10, 'Message must be at least 10 characters')
  .max(1000, 'Message must be less than 1000 characters')

// URL validation schema
export const urlSchema = z
  .string()
  .url('Please enter a valid URL')
  .optional()

/**
 * Newsletter subscription validation
 */
export const newsletterSubscriptionSchema = z.object({
  email: emailSchema,
  firstName: nameSchema.optional(),
  interests: z.array(z.string()).optional(),
  source: z.string().optional(),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: 'GDPR consent is required'
  })
})

export type NewsletterSubscription = z.infer<typeof newsletterSubscriptionSchema>

/**
 * Contact form validation
 */
export const contactFormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  company: companySchema,
  phone: phoneSchema,
  jobTitle: z.string().max(100, 'Job title must be less than 100 characters').optional(),
  message: messageSchema,
  serviceInterest: z.enum([
    'strategic-consulting',
    'system-integration', 
    'digital-transformation',
    'cloud-solutions',
    'data-analytics',
    'other'
  ]).optional(),
  budget: z.enum([
    'under-50k',
    '50k-100k',
    '100k-250k',
    '250k-500k',
    'over-500k',
    'not-sure'
  ]).optional(),
  timeline: z.enum([
    'immediate',
    '1-3-months',
    '3-6-months',
    '6-12-months',
    'planning-phase'
  ]).optional(),
  gdprConsent: z.boolean().refine(val => val === true, {
    message: 'Privacy policy consent is required'
  })
})

export type ContactForm = z.infer<typeof contactFormSchema>

/**
 * Content validation schemas
 */
export const contentSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  description: z.string().max(500, 'Description too long').optional(),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published', 'archived']),
  publishedAt: z.string().datetime().optional(),
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),
  featuredImage: urlSchema,
  seoTitle: z.string().max(60, 'SEO title too long').optional(),
  seoDescription: z.string().max(160, 'SEO description too long').optional()
})

export type Content = z.infer<typeof contentSchema>

/**
 * Authentication validation schemas
 */
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional()
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export const resetPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})

export const newPasswordSchema = z.object({
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  token: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>
export type NewPasswordForm = z.infer<typeof newPasswordSchema>

/**
 * API query validation
 */
export const paginationSchema = z.object({
  page: z.coerce.number().min(1, 'Page must be at least 1').default(1),
  limit: z.coerce.number().min(1).max(100, 'Limit must be between 1 and 100').default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
})

export type PaginationQuery = z.infer<typeof paginationSchema>

export const searchQuerySchema = z.object({
  q: z.string().min(1, 'Search query is required').max(100, 'Search query too long'),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
  page: z.coerce.number().min(1, 'Page must be at least 1').default(1),
  limit: z.coerce.number().min(1).max(100, 'Limit must be between 1 and 100').default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
})

export type SearchQuery = z.infer<typeof searchQuerySchema>

/**
 * Validation helper functions
 */

/**
 * Validate request body against a schema
 */
export async function validateRequestBody<T>(
  request: Request,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const body = await request.json()
    return schema.parse(body)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw error
    }
    throw new Error('Invalid JSON in request body')
  }
}

/**
 * Validate search parameters against a schema
 */
export function validateSearchParams<T>(
  searchParams: URLSearchParams,
  schema: z.ZodSchema<T>
): T {
  const params: Record<string, any> = {}
  
  for (const [key, value] of searchParams.entries()) {
    // Handle array parameters (e.g., tags[]=tag1&tags[]=tag2)
    if (key.endsWith('[]')) {
      const arrayKey = key.slice(0, -2)
      if (!params[arrayKey]) {
        params[arrayKey] = []
      }
      params[arrayKey].push(value)
    } else {
      params[key] = value
    }
  }
  
  return schema.parse(params)
}

/**
 * Sanitize HTML content
 */
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
}

/**
 * Generate a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Validate and normalize email
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim()
}
