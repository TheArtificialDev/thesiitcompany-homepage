'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimateProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  className?: string
  threshold?: number
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element comes into view
            setTimeout(() => {
              entry.target.classList.add('animate')
            }, delay)
          } else {
            // Remove animation class when element goes out of view
            entry.target.classList.remove('animate')
          }
        })
      },
      {
        threshold,
        rootMargin: '-50px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold])

  const getAnimationClasses = () => {
    switch (direction) {
      case 'up':
        return 'scroll-animate scroll-animate-up'
      case 'down':
        return 'scroll-animate scroll-animate-down'
      case 'left':
        return 'scroll-animate scroll-animate-left'
      case 'right':
        return 'scroll-animate scroll-animate-right'
      case 'scale':
        return 'scroll-animate scroll-animate-scale'
      case 'fade':
        return 'scroll-animate'
      default:
        return 'scroll-animate scroll-animate-up'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}

// Stagger component for multiple elements
interface ScrollStaggerProps {
  children: React.ReactNode[]
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  staggerDelay?: number
  className?: string
}

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  direction = 'up',
  staggerDelay = 100,
  className = ''
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimate
          key={index}
          direction={direction}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimate>
      ))}
    </div>
  )
}
