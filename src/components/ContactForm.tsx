'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'

interface ContactFormData {
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
  gdprConsent: boolean
}

interface ContactFormProps {
  className?: string
  onSuccess?: () => void
}

export function ContactForm({ className = '', onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    message: '',
    serviceInterest: '',
    budget: '',
    timeline: '',
    gdprConsent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        onSuccess?.()
      } else {
        setError(result.error?.message || 'Failed to send message')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Contact form error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={`p-8 text-center ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-implementation-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-implementation-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-deep-blue mb-2">Message Sent Successfully!</h3>
          <p className="text-neutral-slate">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className={`p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-deep-blue mb-2">
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-deep-blue mb-2">
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-deep-blue mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@company.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-deep-blue mb-2">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-deep-blue mb-2">
              Job Title
            </label>
            <Input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="CTO, VP Engineering, etc."
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-deep-blue mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-deep-blue mb-2">
            Service Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insight-orange focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="strategic-consulting">Strategic Consulting</option>
            <option value="system-integration">System Integration</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-deep-blue mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insight-orange focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="under-50k">Under $50K</option>
              <option value="50k-100k">$50K - $100K</option>
              <option value="100k-250k">$100K - $250K</option>
              <option value="250k-500k">$250K - $500K</option>
              <option value="over-500k">Over $500K</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-deep-blue mb-2">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insight-orange focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="planning-phase">Planning phase</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-deep-blue mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project, challenges, or questions..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insight-orange focus:border-transparent resize-vertical"
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="gdprConsent"
            name="gdprConsent"
            type="checkbox"
            required
            checked={formData.gdprConsent}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-insight-orange focus:ring-insight-orange border-gray-300 rounded"
          />
          <label htmlFor="gdprConsent" className="text-sm text-neutral-slate">
            I agree to the processing of my personal data in accordance with the{' '}
            <a href="/privacy" className="text-insight-orange hover:underline">
              Privacy Policy
            </a>{' '}
            and consent to being contacted about my inquiry. *
          </label>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </Card>
  )
}
