'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Alert } from '@/components/ui/Alert'
import { Typography } from '@/components/ui/Typography'
import { loginSchema, type LoginForm } from '@/lib/validation'

interface LoginFormProps {
  className?: string
  redirectTo?: string
  onSuccess?: (user: any) => void
}

export function LoginForm({ className = '', redirectTo = '/', onSuccess }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const router = useRouter()

  const handleInputChange = (field: keyof LoginForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    try {
      loginSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitMessage({
          type: 'success',
          message: result.data.message
        })

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess(result.data.user)
        }

        // Redirect after successful login
        setTimeout(() => {
          router.push(redirectTo)
        }, 1000)
      } else {
        setSubmitMessage({
          type: 'error',
          message: result.error?.message || 'Login failed. Please try again.'
        })
      }
    } catch (error) {
      console.error('Login error:', error)
      setSubmitMessage({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center mb-6">
          <Typography variant="h2" className="text-gray-900 mb-2">
            Welcome Back
          </Typography>
          <Typography variant="p" className="text-gray-600">
            Sign in to your account to continue
          </Typography>
        </div>

        {submitMessage && (
          <Alert
            variant={submitMessage.type === 'success' ? 'success' : 'error'}
            className="mb-6"
          >
            {submitMessage.message}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <Typography variant="small" className="text-red-600 mt-1">
                {errors.email}
              </Typography>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter your password"
              disabled={isSubmitting}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && (
              <Typography variant="small" className="text-red-600 mt-1">
                {errors.password}
              </Typography>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                disabled={isSubmitting}
              />
              <Typography variant="small" className="ml-2 text-gray-600">
                Remember me
              </Typography>
            </label>

            <button
              type="button"
              className="text-sm text-brand-600 hover:text-brand-700 font-medium"
              onClick={() => router.push('/auth/reset-password')}
              disabled={isSubmitting}
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Typography variant="small" className="text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-brand-600 hover:text-brand-700 font-medium"
              onClick={() => router.push('/auth/register')}
              disabled={isSubmitting}
            >
              Sign up
            </button>
          </Typography>
        </div>
      </div>
    </div>
  )
}
