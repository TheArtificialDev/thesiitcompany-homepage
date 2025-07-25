import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva('mx-auto', {
  variants: {
    size: {
      xs: 'max-w-sm',
      sm: 'max-w-3xl',
      default: 'max-w-7xl',
      lg: 'max-w-8xl',
      xl: 'max-w-9xl',
      content: 'max-w-4xl',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      xs: 'px-2 sm:px-3',
      sm: 'px-3 sm:px-4 md:px-6',
      default: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12 xl:px-16',
      xl: 'px-8 sm:px-12 lg:px-16 xl:px-20',
    },
    responsive: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'default',
    padding: 'default',
    responsive: true,
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  safeArea?: boolean
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, responsive, safeArea, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        containerVariants({ size, padding, responsive, className }),
        safeArea && 'safe-left safe-right'
      )}
      {...props}
    />
  )
)

Container.displayName = 'Container'

export { Container, containerVariants }
