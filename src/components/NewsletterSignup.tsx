'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'

interface NewsletterSignupData {
  email: string
  gdprConsent: boolean
  interests: string[]
}

interface NewsletterSignupProps {
  className?: string
  variant?: 'inline' | 'card' | 'minimal'
  onSuccess?: () => void
}

export function NewsletterSignup({ 
  className = '', 
  variant = 'card',
  onSuccess 
}: NewsletterSignupProps) {
  const [formData, setFormData] = useState<NewsletterSignupData>({
    email: '',
    gdprConsent: false,
    interests: ['technology']
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const availableInterests = [
    { id: 'technology', label: 'Technology & Innovation' },
    { id: 'industry-insights', label: 'Industry Insights' },
    { id: 'digital-transformation', label: 'Digital Transformation' },
    { id: 'cloud-solutions', label: 'Cloud Solutions' },
    { id: 'data-analytics', label: 'Data & Analytics' },
    { id: 'case-studies', label: 'Case Studies' }
  ]

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }))
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, gdprConsent: e.target.checked }))
  }

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/newsletter', {
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
        setError(result.error?.message || 'Failed to subscribe')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Newsletter signup error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    const SuccessMessage = () => (
      <div className="text-center">
        <div className="w-12 h-12 bg-implementation-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-implementation-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-deep-blue mb-2">Almost there!</h3>
        <p className="text-neutral-slate">
          Please check your email and click the confirmation link to complete your subscription.
        </p>
      </div>
    )

    if (variant === 'card') {
      return (
        <Card className={`p-6 ${className}`}>
          <SuccessMessage />
        </Card>
      )
    }

    return (
      <div className={className}>
        <SuccessMessage />
      </div>
    )
  }

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="newsletter-email" className="block text-sm font-medium text-deep-blue mb-2">
          Email Address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="your.email@company.com"
        />
      </div>

      {variant === 'card' && (
        <div>
          <label className="block text-sm font-medium text-deep-blue mb-3">
            Topics of Interest
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {availableInterests.map(interest => (
              <label key={interest.id} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest.id)}
                  onChange={(e) => handleInterestChange(interest.id, e.target.checked)}
                  className="h-4 w-4 text-insight-orange focus:ring-insight-orange border-gray-300 rounded"
                />
                <span className="text-neutral-slate">{interest.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-start space-x-3">
        <input
          id="newsletter-consent"
          name="gdprConsent"
          type="checkbox"
          required
          checked={formData.gdprConsent}
          onChange={handleConsentChange}
          className="mt-1 h-4 w-4 text-insight-orange focus:ring-insight-orange border-gray-300 rounded"
        />
        <label htmlFor="newsletter-consent" className="text-sm text-neutral-slate">
          I agree to receive emails from ThesIIT Company and understand I can unsubscribe at any time.
          {variant === 'card' && (
            <>
              {' '}See our{' '}
              <a href="/privacy" className="text-insight-orange hover:underline">
                Privacy Policy
              </a>.
            </>
          )}
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={variant === 'inline' ? 'w-auto' : 'w-full'}
        size={variant === 'minimal' ? 'sm' : 'default'}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  )

  if (variant === 'card') {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-deep-blue mb-2">Stay Updated</h3>
          <p className="text-neutral-slate">
            Get the latest insights on technology, digital transformation, and industry trends.
          </p>
        </div>
        <FormContent />
      </Card>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 items-end ${className}`}>
        <div className="flex-1">
          <label htmlFor="newsletter-email-inline" className="block text-sm font-medium text-deep-blue mb-2">
            Email Address
          </label>
          <Input
            id="newsletter-email-inline"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="your.email@company.com"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="newsletter-consent-inline"
            name="gdprConsent"
            type="checkbox"
            required
            checked={formData.gdprConsent}
            onChange={handleConsentChange}
            className="h-4 w-4 text-insight-orange focus:ring-insight-orange border-gray-300 rounded"
          />
          <label htmlFor="newsletter-consent-inline" className="text-sm text-neutral-slate whitespace-nowrap">
            I agree to emails
          </label>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          type="button"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
        {error && (
          <div className="w-full sm:w-auto bg-red-50 border border-red-200 rounded-md p-2 mt-2">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      <FormContent />
    </div>
  )
}
