import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const loadingVariants = cva('animate-spin', {
  variants: {
    variant: {
      spinner: 'rounded-full border-2 border-current border-t-transparent',
      dots: 'flex space-x-1',
      pulse: 'rounded bg-current',
      bars: 'flex space-x-1',
    },
    size: {
      sm: '',
      default: '',
      lg: '',
      xl: '',
    },
    color: {
      default: 'text-deep-blue',
      accent: 'text-insight-orange',
      muted: 'text-neutral-slate',
      white: 'text-white',
    },
  },
  compoundVariants: [
    // Spinner sizes
    {
      variant: 'spinner',
      size: 'sm',
      class: 'h-4 w-4',
    },
    {
      variant: 'spinner',
      size: 'default',
      class: 'h-6 w-6',
    },
    {
      variant: 'spinner',
      size: 'lg',
      class: 'h-8 w-8',
    },
    {
      variant: 'spinner',
      size: 'xl',
      class: 'h-12 w-12',
    },
    // Pulse sizes
    {
      variant: 'pulse',
      size: 'sm',
      class: 'h-2 w-2',
    },
    {
      variant: 'pulse',
      size: 'default',
      class: 'h-3 w-3',
    },
    {
      variant: 'pulse',
      size: 'lg',
      class: 'h-4 w-4',
    },
    {
      variant: 'pulse',
      size: 'xl',
      class: 'h-6 w-6',
    },
  ],
  defaultVariants: {
    variant: 'spinner',
    size: 'default',
    color: 'default',
  },
})

export interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof loadingVariants> {
  text?: string
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant, size, color, text, ...props }, ref) => {
    if (variant === 'dots') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center gap-3', className)}
          {...props}
        >
          <div className={cn(loadingVariants({ variant, color }))}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  'animate-pulse rounded-full bg-current',
                  size === 'sm' && 'h-1 w-1',
                  size === 'default' && 'h-1.5 w-1.5',
                  size === 'lg' && 'h-2 w-2',
                  size === 'xl' && 'h-3 w-3'
                )}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          {text && (
            <span className={cn('text-sm', color === 'white' ? 'text-white' : 'text-neutral-slate')}>
              {text}
            </span>
          )}
        </div>
      )
    }

    if (variant === 'bars') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center gap-3', className)}
          {...props}
        >
          <div className={cn(loadingVariants({ variant, color }))}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  'animate-pulse bg-current rounded-sm',
                  size === 'sm' && 'h-3 w-1',
                  size === 'default' && 'h-4 w-1',
                  size === 'lg' && 'h-6 w-1.5',
                  size === 'xl' && 'h-8 w-2'
                )}
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
          {text && (
            <span className={cn('text-sm', color === 'white' ? 'text-white' : 'text-neutral-slate')}>
              {text}
            </span>
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-3', className)}
        {...props}
      >
        <div className={cn(loadingVariants({ variant, size, color }))} />
        {text && (
          <span className={cn('text-sm', color === 'white' ? 'text-white' : 'text-neutral-slate')}>
            {text}
          </span>
        )}
      </div>
    )
  }
)

Loading.displayName = 'Loading'

// Convenience components
const Spinner = forwardRef<HTMLDivElement, Omit<LoadingProps, 'variant'>>(
  (props, ref) => <Loading {...props} variant="spinner" ref={ref} />
)
Spinner.displayName = 'Spinner'

const LoadingDots = forwardRef<HTMLDivElement, Omit<LoadingProps, 'variant'>>(
  (props, ref) => <Loading {...props} variant="dots" ref={ref} />
)
LoadingDots.displayName = 'LoadingDots'

const LoadingBars = forwardRef<HTMLDivElement, Omit<LoadingProps, 'variant'>>(
  (props, ref) => <Loading {...props} variant="bars" ref={ref} />
)
LoadingBars.displayName = 'LoadingBars'

export { Loading, loadingVariants, Spinner, LoadingDots, LoadingBars }
