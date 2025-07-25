'use client'

import { useEffect, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'

interface LottieAnimationProps {
  animationData?: any
  animationUrl?: string
  width?: number | string
  height?: number | string
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
  onComplete?: () => void
  onLoopComplete?: () => void
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  animationUrl,
  width = 200,
  height = 200,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1,
  onComplete,
  onLoopComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Load animation from data or URL
    const loadAnimation = async () => {
      let animation: AnimationItem

      if (animationData) {
        animation = lottie.loadAnimation({
          container: containerRef.current!,
          renderer: 'svg',
          loop,
          autoplay,
          animationData
        })
      } else if (animationUrl) {
        animation = lottie.loadAnimation({
          container: containerRef.current!,
          renderer: 'svg',
          loop,
          autoplay,
          path: animationUrl
        })
      } else {
        // Fallback: create a simple pulsing animation
        const fallbackData = {
          v: "5.7.4",
          fr: 30,
          ip: 0,
          op: 60,
          w: 200,
          h: 200,
          nm: "Pulse",
          ddd: 0,
          assets: [],
          layers: [{
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Circle",
            sr: 1,
            ks: {
              o: { a: 0, k: 100 },
              r: { a: 0, k: 0 },
              p: { a: 0, k: [100, 100, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: {
                a: 1,
                k: [
                  { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100] },
                  { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [120] },
                  { t: 60, s: [100] }
                ]
              }
            },
            ao: 0,
            shapes: [{
              ty: "gr",
              it: [{
                d: 1,
                ty: "el",
                s: { a: 0, k: [80, 80] },
                p: { a: 0, k: [0, 0] }
              }, {
                ty: "fl",
                c: { a: 0, k: [0.2, 0.6, 1, 1] },
                o: { a: 0, k: 100 }
              }],
              nm: "Circle Group"
            }],
            ip: 0,
            op: 60,
            st: 0,
            bm: 0
          }]
        }
        
        animation = lottie.loadAnimation({
          container: containerRef.current!,
          renderer: 'svg',
          loop,
          autoplay,
          animationData: fallbackData
        })
      }

      animationRef.current = animation
      animation.setSpeed(speed)

      // Event listeners
      if (onComplete) {
        animation.addEventListener('complete', onComplete)
      }
      if (onLoopComplete) {
        animation.addEventListener('loopComplete', onLoopComplete)
      }
    }

    loadAnimation()

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationData, animationUrl, loop, autoplay, speed, onComplete, onLoopComplete])

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  }

  return (
    <div 
      ref={containerRef} 
      className={`lottie-container ${className}`}
      style={containerStyle}
    />
  )
}

// Predefined animation components for common use cases
export const LoadingAnimation: React.FC<{ size?: number; className?: string }> = ({ 
  size = 100, 
  className = '' 
}) => {
  return (
    <LottieAnimation
      animationUrl="https://assets2.lottiefiles.com/packages/lf20_szlepvdj.json"
      width={size}
      height={size}
      className={className}
    />
  )
}

export const SuccessAnimation: React.FC<{ size?: number; className?: string }> = ({ 
  size = 100, 
  className = '' 
}) => {
  return (
    <LottieAnimation
      animationUrl="https://assets2.lottiefiles.com/packages/lf20_lk80fpsm.json"
      width={size}
      height={size}
      loop={false}
      className={className}
    />
  )
}

export const TechAnimation: React.FC<{ size?: number; className?: string }> = ({ 
  size = 200, 
  className = '' 
}) => {
  return (
    <LottieAnimation
      animationUrl="https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json"
      width={size}
      height={size}
      className={className}
    />
  )
}

export const CodeAnimation: React.FC<{ size?: number; className?: string }> = ({ 
  size = 200, 
  className = '' 
}) => {
  return (
    <LottieAnimation
      animationUrl="https://assets2.lottiefiles.com/packages/lf20_fcfjwiyb.json"
      width={size}
      height={size}
      className={className}
    />
  )
}
