'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface NavigationItem {
  label: string
  href: string
  icon?: string
}

const navigation: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    icon: '👋'
  },
  {
    label: 'Services',
    href: '/services',
    icon: '⚡'
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    icon: '🚀'
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: '📝'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: '💬'
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200/50 glass-morphism'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      )}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo with floating animation */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 touch-target group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float">
                  <Typography variant="large" className="font-display font-bold text-white">
                    S
                  </Typography>
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 rounded-xl opacity-20 blur-lg animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <Typography variant="large" className={cn(
                  "font-display font-bold transition-all duration-300 bg-gradient-to-r bg-clip-text text-transparent",
                  isScrolled 
                    ? "from-slate-900 via-blue-600 to-purple-600" 
                    : "from-white via-blue-100 to-purple-100",
                  "group-hover:scale-105"
                )}>
                  The SIIT Company
                </Typography>
                <Typography variant="small" className={cn(
                  "font-mono text-xs tracking-wide transition-colors",
                  isScrolled ? "text-slate-500" : "text-white/70"
                )}>
                  Tech • Innovation • Growth
                </Typography>
              </div>
              {/* Mobile logo text */}
              <Typography variant="large" className={cn(
                "font-display font-bold transition-all duration-300 sm:hidden bg-gradient-to-r bg-clip-text text-transparent",
                isScrolled 
                  ? "from-slate-900 to-blue-600" 
                  : "from-white to-blue-100"
              )}>
                SIIT
              </Typography>
            </Link>
          </div>

          {/* Desktop Navigation with innovative design */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group relative overflow-hidden',
                    isActivePath(item.href)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : isScrolled
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {/* Icon with bounce animation */}
                  <span className={cn(
                    "text-lg transition-transform duration-300",
                    hoveredItem === item.href ? "animate-bounce-subtle" : "",
                    isActivePath(item.href) ? "animate-bounce-subtle" : ""
                  )}>
                    {item.icon}
                  </span>
                  
                  {/* Text with gradient animation */}
                  <span className={cn(
                    "text-sm font-medium transition-all duration-300 font-body",
                    isActivePath(item.href) ? "font-semibold" : ""
                  )}>
                    {item.label}
                  </span>
                  
                  {/* Animated background for hover */}
                  {!isActivePath(item.href) && (
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full opacity-0 transition-opacity duration-300",
                      hoveredItem === item.href ? "opacity-100" : ""
                    )} />
                  )}
                  
                  {/* Active indicator */}
                  {isActivePath(item.href) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button 
                variant="default" 
                size="sm"
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 transform hover:scale-105",
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                    : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30'
                )}
              >
                <span className="relative z-10 flex items-center space-x-2 font-medium">
                  <span>Get Started</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-200/20 transition-colors touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={cn(
                'h-6 w-6 transition-all duration-200',
                isScrolled ? 'text-slate-700' : 'text-white'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          )}
        >
          <div className="border-t border-slate-200 bg-white/95 backdrop-blur-sm safe-bottom">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 touch-target',
                    isActivePath(item.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-slate-700 hover:text-orange-500 hover:bg-slate-50'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 touch-target"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
