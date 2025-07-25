import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight',
      h2: 'scroll-m-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight first:mt-0',
      h3: 'scroll-m-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-tight',
      h4: 'scroll-m-20 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight leading-tight',
      h5: 'scroll-m-20 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight leading-tight',
      h6: 'scroll-m-20 text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-tight',
      p: 'text-sm sm:text-base leading-relaxed [&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-6',
      lead: 'text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed',
      large: 'text-base sm:text-lg font-semibold',
      small: 'text-xs sm:text-sm font-medium leading-none',
      muted: 'text-xs sm:text-sm text-slate-500 leading-relaxed',
      code: 'relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm font-semibold',
      blockquote: 'mt-4 sm:mt-6 border-l-2 border-slate-200 pl-4 sm:pl-6 italic text-sm sm:text-base',
    },
    color: {
      default: 'text-deep-blue',
      muted: 'text-neutral-slate',
      accent: 'text-insight-orange',
      success: 'text-implementation-green',
      white: 'text-white',
      inherit: 'text-inherit',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'default',
    align: 'left',
  },
})

export interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'p', color, align, weight, as, className, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant || 'p')
    
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, color, align, weight }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = 'Typography'

function getDefaultElement(variant?: string): React.ElementType {
  switch (variant) {
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    case 'h4':
      return 'h4'
    case 'h5':
      return 'h5'
    case 'h6':
      return 'h6'
    case 'lead':
    case 'large':
    case 'small':
    case 'muted':
    case 'p':
      return 'p'
    case 'code':
      return 'code'
    case 'blockquote':
      return 'blockquote'
    default:
      return 'p'
  }
}

// Convenience components for common use cases
const Heading1 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h1" ref={ref} />
)
Heading1.displayName = 'Heading1'

const Heading2 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h2" ref={ref} />
)
Heading2.displayName = 'Heading2'

const Heading3 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h3" ref={ref} />
)
Heading3.displayName = 'Heading3'

const Paragraph = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="p" ref={ref} />
)
Paragraph.displayName = 'Paragraph'

const Lead = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="lead" ref={ref} />
)
Lead.displayName = 'Lead'

const Muted = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="muted" ref={ref} />
)
Muted.displayName = 'Muted'

export { 
  Typography, 
  typographyVariants,
  Heading1,
  Heading2, 
  Heading3,
  Paragraph,
  Lead,
  Muted
}
