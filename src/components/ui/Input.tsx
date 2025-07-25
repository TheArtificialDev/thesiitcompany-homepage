import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'flex w-full rounded-lg border bg-white px-3 py-2 text-base sm:text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-target appearance-none',
  {
    variants: {
      variant: {
        default:
          'border-neutral-slate/30 focus-visible:ring-deep-blue focus-visible:border-deep-blue hover:border-neutral-slate/50',
        error:
          'border-red-500 focus-visible:ring-red-500 text-red-900 placeholder:text-red-400 bg-red-50/50',
        success:
          'border-implementation-green focus-visible:ring-implementation-green bg-green-50/50',
      },
      inputSize: {
        sm: 'h-8 text-xs px-2',
        default: 'h-10 sm:h-9',
        lg: 'h-12 text-base px-4',
        xl: 'h-14 text-lg px-4',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
      fullWidth: true,
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none text-deep-blue peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(inputVariants({ variant: error ? 'error' : variant, inputSize, className }))}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            error ? 'text-red-600' : 'text-neutral-slate'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
    error?: string
    helperText?: string
  }
>(({ className, label, error, helperText, id, ...props }, ref) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium leading-none text-deep-blue peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          'flex min-h-[120px] w-full rounded-lg border border-neutral-slate/30 bg-white px-3 py-2 text-sm transition-all placeholder:text-neutral-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
          error && 'border-red-500 focus-visible:ring-red-500 text-red-900 placeholder:text-red-400',
          className
        )}
        ref={ref}
        {...props}
      />
      {(error || helperText) && (
        <p className={cn(
          'text-sm',
          error ? 'text-red-600' : 'text-neutral-slate'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export { Input, Textarea, inputVariants }
