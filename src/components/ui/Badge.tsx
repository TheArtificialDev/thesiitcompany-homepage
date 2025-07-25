import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const badgeVariants = {
  default: 'bg-blue-600 text-white',
  secondary: 'bg-slate-100 text-slate-700',
  outline: 'border border-slate-200 text-slate-700 bg-transparent',
  success: 'bg-green-100 text-green-800 border border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
  error: 'bg-red-100 text-red-800 border border-red-200'
}

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base'
}

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'sm', 
  className 
}: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center font-medium rounded-full',
      badgeVariants[variant],
      badgeSizes[size],
      className
    )}>
      {children}
    </span>
  )
}
