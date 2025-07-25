import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Container } from './Container'

const sectionVariants = cva('', {
  variants: {
    padding: {
      none: 'py-0',
      xs: 'py-4 md:py-6',
      sm: 'py-6 md:py-8 lg:py-12',
      default: 'py-8 md:py-12 lg:py-16',
      lg: 'py-12 md:py-16 lg:py-24 xl:py-32',
      xl: 'py-16 md:py-20 lg:py-32 xl:py-40',
    },
    background: {
      transparent: 'bg-transparent',
      white: 'bg-white',
      light: 'bg-light-technical',
      dark: 'bg-deep-blue text-white',
      accent: 'bg-gradient-to-br from-white to-insight-orange/5',
      gray: 'bg-gray-50',
    },
    fullHeight: {
      true: 'min-h-screen',
      viewport: 'min-h-screen-75',
      false: '',
    },
  },
  defaultVariants: {
    padding: 'default',
    background: 'transparent',
    fullHeight: false,
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  containerSize?: 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'content' | 'full'
  containerPadding?: 'none' | 'xs' | 'sm' | 'default' | 'lg' | 'xl'
  as?: 'section' | 'div' | 'article' | 'aside' | 'main' | 'header' | 'footer'
  safeArea?: boolean
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ 
    className, 
    padding, 
    background, 
    fullHeight,
    containerSize, 
    containerPadding,
    as: Component = 'section',
    safeArea,
    children, 
    ...props 
  }, ref) => (
    <Component
      ref={ref as any}
      className={cn(
        sectionVariants({ padding, background, fullHeight, className }),
        safeArea && 'safe-top safe-bottom'
      )}
      {...props}
    >
      <Container 
        size={containerSize} 
        padding={containerPadding}
        safeArea={safeArea || false}
      >
        {children}
      </Container>
    </Component>
  )
)

Section.displayName = 'Section'

export { Section, sectionVariants }
