import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-target active:scale-95 transform',
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg focus-visible:ring-blue-500 active:bg-blue-800',
        secondary:
          'bg-slate-600 text-white shadow-md hover:bg-slate-700 hover:shadow-lg focus-visible:ring-slate-500 active:bg-slate-800',
        accent:
          'bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg focus-visible:ring-orange-400 active:bg-orange-700',
        success:
          'bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg focus-visible:ring-green-500 active:bg-green-800',
        outline:
          'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white focus-visible:ring-blue-500 active:bg-blue-700 active:border-blue-700',
        ghost:
          'text-blue-600 hover:bg-blue-50 hover:text-blue-700 focus-visible:ring-blue-500 active:bg-blue-100',
        link: 'text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-500 active:text-blue-800',
      },
      size: {
        default: 'h-10 px-4 py-2 min-w-[2.5rem]',
        sm: 'h-9 rounded-md px-3 min-w-[2.25rem]',
        lg: 'h-12 rounded-lg px-8 text-base min-w-[3rem]',
        xl: 'h-14 rounded-lg px-10 text-lg min-w-[3.5rem]',
        icon: 'h-10 w-10 p-0',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
