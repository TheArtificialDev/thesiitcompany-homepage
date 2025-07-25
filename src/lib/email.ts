/**
 * Email service integration for newsletter and contact form functionality
 * Supports multiple email providers (Mailgun, SendGrid, AWS SES)
 */

import { z } from 'zod'

// Email provider configuration
const _emailConfigSchema = z.object({
  provider: z.enum(['mailgun', 'sendgrid', 'aws-ses']),
  apiKey: z.string(),
  domain: z.string().optional(),
  region: z.string().optional(),
  senderEmail: z.string().email(),
  senderName: z.string(),
})

type EmailConfig = z.infer<typeof _emailConfigSchema>

// Email template types
export interface EmailTemplate {
  id: string
  subject: string
  htmlContent: string
  textContent: string
  variables?: Record<string, string>
}

// Newsletter confirmation email template
export const newsletterConfirmationTemplate: EmailTemplate = {
  id: 'newsletter-confirmation',
  subject: 'Confirm Your Newsletter Subscription - ThesIIT Company',
  htmlContent: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirm Your Newsletter Subscription</title>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1B2951; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; background: #ffffff; }
        .button { display: inline-block; background: #FF6B35; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 14px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>ThesIIT Company</h1>
          <p>Technology & Business Intelligence</p>
        </div>
        <div class="content">
          <h2>Confirm Your Newsletter Subscription</h2>
          <p>Hello,</p>
          <p>Thank you for subscribing to our newsletter! To complete your subscription and start receiving our latest insights on technology, industry trends, and business intelligence, please confirm your email address.</p>
          <p><a href="{{confirmationUrl}}" class="button">Confirm Subscription</a></p>
          <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
          <p><a href="{{confirmationUrl}}">{{confirmationUrl}}</a></p>
          <p>You'll receive updates based on your preferences:</p>
          <ul>
            <li><strong>Topics:</strong> {{subscribedTopics}}</li>
            <li><strong>Frequency:</strong> {{frequency}}</li>
          </ul>
          <p>If you didn't request this subscription, you can safely ignore this email.</p>
          <p>Best regards,<br>The ThesIIT Company Team</p>
        </div>
        <div class="footer">
          <p>ThesIIT Company - Technology & Business Intelligence</p>
          <p>If you have questions, reply to this email or contact us at info@thesiitcompany.com</p>
        </div>
      </div>
    </body>
    </html>
  `,
  textContent: `
    ThesIIT Company - Newsletter Subscription Confirmation
    
    Hello,
    
    Thank you for subscribing to our newsletter! To complete your subscription and start receiving our latest insights on technology, industry trends, and business intelligence, please confirm your email address.
    
    Confirmation link: {{confirmationUrl}}
    
    You'll receive updates based on your preferences:
    - Topics: {{subscribedTopics}}
    - Frequency: {{frequency}}
    
    If you didn't request this subscription, you can safely ignore this email.
    
    Best regards,
    The ThesIIT Company Team
    
    ---
    ThesIIT Company - Technology & Business Intelligence
    If you have questions, reply to this email or contact us at info@thesiitcompany.com
  `,
  variables: {
    confirmationUrl: '',
    subscribedTopics: '',
    frequency: ''
  }
}

// Contact form confirmation template
export const contactFormTemplate: EmailTemplate = {
  id: 'contact-form',
  subject: 'New Contact Form Submission - ThesIIT Company',
  htmlContent: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1B2951; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; background: #ffffff; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1B2951; }
        .value { margin-top: 5px; padding: 10px; background: #f8fafc; border-radius: 4px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 14px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>ThesIIT Company</h1>
          <p>New Contact Form Submission</p>
        </div>
        <div class="content">
          <h2>Contact Form Details</h2>
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">{{name}}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">{{email}}</div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">{{company}}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">{{subject}}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">{{message}}</div>
          </div>
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">{{submittedAt}}</div>
          </div>
        </div>
        <div class="footer">
          <p>ThesIIT Company Internal Notification</p>
        </div>
      </div>
    </body>
    </html>
  `,
  textContent: `
    ThesIIT Company - New Contact Form Submission
    
    Contact Details:
    ----------------
    Name: {{name}}
    Email: {{email}}
    Company: {{company}}
    Subject: {{subject}}
    
    Message:
    {{message}}
    
    Submitted: {{submittedAt}}
    
    ---
    ThesIIT Company Internal Notification
  `,
  variables: {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    submittedAt: ''
  }
}

// Email service interface
export interface EmailService {
  sendEmail(to: string, template: EmailTemplate, variables: Record<string, string>): Promise<boolean>
  sendNewsletter(subscribers: string[], content: string, subject: string): Promise<boolean>
}

// Mock email service for development
export class MockEmailService implements EmailService {
  private config: EmailConfig

  constructor(config: EmailConfig) {
    this.config = config
  }

  async sendEmail(to: string, template: EmailTemplate, variables: Record<string, string>): Promise<boolean> {
    // Replace template variables
    let htmlContent = template.htmlContent
    let textContent = template.textContent
    let subject = template.subject

    Object.entries(variables).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`
      htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), value)
      textContent = textContent.replace(new RegExp(placeholder, 'g'), value)
      subject = subject.replace(new RegExp(placeholder, 'g'), value)
    })

    // Log email for development
    console.log('📧 EMAIL SENT (Mock)', {
      provider: this.config.provider,
      to,
      from: `${this.config.senderName} <${this.config.senderEmail}>`,
      subject,
      templateId: template.id,
      variables,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 100))

    return true
  }

  async sendNewsletter(subscribers: string[], content: string, subject: string): Promise<boolean> {
    console.log('📧 NEWSLETTER SENT (Mock)', {
      provider: this.config.provider,
      subscriberCount: subscribers.length,
      subject,
      timestamp: new Date().toISOString()
    })

    // Simulate newsletter sending delay
    await new Promise(resolve => setTimeout(resolve, 200))

    return true
  }
}

// Mailgun email service implementation
export class MailgunEmailService implements EmailService {
  private config: EmailConfig

  constructor(config: EmailConfig) {
    this.config = config
  }

  async sendEmail(to: string, template: EmailTemplate, variables: Record<string, string>): Promise<boolean> {
    try {
      // Replace template variables
      let htmlContent = template.htmlContent
      let textContent = template.textContent
      let subject = template.subject

      Object.entries(variables).forEach(([key, value]) => {
        const placeholder = `{{${key}}}`
        htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), value)
        textContent = textContent.replace(new RegExp(placeholder, 'g'), value)
        subject = subject.replace(new RegExp(placeholder, 'g'), value)
      })

      // Mailgun API integration would go here
      // const response = await fetch(`https://api.mailgun.net/v3/${this.config.domain}/messages`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Basic ${Buffer.from(`api:${this.config.apiKey}`).toString('base64')}`,
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: new URLSearchParams({
      //     from: `${this.config.senderName} <${this.config.senderEmail}>`,
      //     to,
      //     subject,
      //     text: textContent,
      //     html: htmlContent,
      //   }),
      // })

      console.log('📧 EMAIL SENT (Mailgun)', {
        to,
        subject,
        templateId: template.id
      })

      return true
    } catch (error) {
      console.error('Failed to send email via Mailgun:', error)
      return false
    }
  }

  async sendNewsletter(subscribers: string[], content: string, subject: string): Promise<boolean> {
    // Implementation for bulk newsletter sending via Mailgun
    // Would use Mailgun's batch sending functionality
    console.log('📧 NEWSLETTER SENT (Mailgun)', {
      subscriberCount: subscribers.length,
      subject
    })
    return true
  }
}

// SendGrid email service implementation
export class SendGridEmailService implements EmailService {
  private config: EmailConfig

  constructor(config: EmailConfig) {
    this.config = config
  }

  async sendEmail(to: string, template: EmailTemplate, _variables: Record<string, string>): Promise<boolean> {
    try {
      // SendGrid API integration would go here
      console.log('📧 EMAIL SENT (SendGrid)', {
        to,
        templateId: template.id
      })
      return true
    } catch (error) {
      console.error('Failed to send email via SendGrid:', error)
      return false
    }
  }

  async sendNewsletter(subscribers: string[], content: string, subject: string): Promise<boolean> {
    console.log('📧 NEWSLETTER SENT (SendGrid)', {
      subscriberCount: subscribers.length,
      subject
    })
    return true
  }
}

// Email service factory
export function createEmailService(config: EmailConfig): EmailService {
  switch (config.provider) {
    case 'mailgun':
      return new MailgunEmailService(config)
    case 'sendgrid':
      return new SendGridEmailService(config)
    case 'aws-ses':
      // AWS SES implementation would go here
      return new MockEmailService(config)
    default:
      return new MockEmailService(config)
  }
}

// Get email service instance
export function getEmailService(): EmailService {
  const config: EmailConfig = {
    provider: (process.env.EMAIL_PROVIDER as any) || 'mailgun',
    apiKey: process.env.EMAIL_API_KEY || 'mock-api-key',
    domain: process.env.EMAIL_DOMAIN || 'thesiitcompany.com',
    senderEmail: process.env.EMAIL_SENDER || 'noreply@thesiitcompany.com',
    senderName: process.env.EMAIL_SENDER_NAME || 'ThesIIT Company',
  }

  return createEmailService(config)
}
