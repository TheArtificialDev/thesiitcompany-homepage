'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, ArrowRight, Share2, Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  author: {
    name: string
    avatar?: string
    bio?: string
  }
  publishedAt: string
  updatedAt?: string
  readingTime: number
  tags: string[]
  category: string
  featuredImage?: string
  featured?: boolean
  published?: boolean
}

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured' | 'compact' | 'minimal'
  className?: string
}

export function BlogCard({ post, variant = 'default', className }: BlogCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (variant === 'featured') {
    return (
      <div className={cn(
        'group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300',
        className
      )}>
        <div className="flex flex-col lg:flex-row">
          {post.featuredImage && (
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary-blue text-white">
                  Featured
                </Badge>
              </div>
            </div>
          )}
          
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-sm text-neutral-slate mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-neutral-charcoal mb-4 group-hover:text-primary-blue transition-colors">
                {post.title}
              </h2>
              
              <p className="text-neutral-slate mb-6 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {post.author.avatar && (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium text-neutral-charcoal">{post.author.name}</p>
                    <p className="text-sm text-neutral-slate">{post.category}</p>
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="accent" className="group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn(
        'group flex gap-4 p-4 rounded-lg hover:bg-neutral-slate/5 transition-colors',
        className
      )}>
        {post.featuredImage && (
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={80}
              height={80}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-neutral-charcoal group-hover:text-primary-blue transition-colors line-clamp-2 mb-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          
          <div className="flex items-center gap-3 text-sm text-neutral-slate mb-2">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readingTime} min</span>
          </div>
          
          <p className="text-sm text-neutral-slate line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className={cn('group py-4 border-b border-neutral-slate/20 last:border-b-0', className)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-charcoal group-hover:text-primary-blue transition-colors mb-2">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            
            <div className="flex items-center gap-4 text-sm text-neutral-slate">
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime} min read</span>
              <span className="text-primary-blue">{post.category}</span>
            </div>
          </div>
          
          <ArrowRight className="h-4 w-4 text-neutral-slate group-hover:text-primary-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn(
      'group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-neutral-slate/20',
      className
    )}>
      {post.featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={cn(
                'p-2 rounded-full transition-colors',
                isBookmarked 
                  ? 'bg-primary-blue text-white' 
                  : 'bg-white/90 text-neutral-charcoal hover:bg-white'
              )}
            >
              <Bookmark className="h-4 w-4" />
            </button>
            
            <button className="p-2 rounded-full bg-white/90 text-neutral-charcoal hover:bg-white transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-primary-blue border-primary-blue">
            {post.category}
          </Badge>
          
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-charcoal group-hover:text-primary-blue transition-colors mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-neutral-slate mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {post.author.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div className="text-sm">
              <p className="font-medium text-neutral-charcoal">{post.author.name}</p>
              <div className="flex items-center gap-2 text-neutral-slate">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingTime} min</span>
              </div>
            </div>
          </div>
          
          <Link href={`/blog/${post.slug}`}>
            <Button variant="ghost" size="sm" className="group/btn">
              Read
              <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Blog Grid Component
interface BlogGridProps {
  posts: BlogPost[]
  featured?: BlogPost
  className?: string
}

export function BlogGrid({ posts, featured, className }: BlogGridProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {featured && (
        <BlogCard post={featured} variant="featured" />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

// Blog List Component
interface BlogListProps {
  posts: BlogPost[]
  variant?: 'default' | 'compact' | 'minimal'
  className?: string
}

export function BlogList({ posts, variant = 'default', className }: BlogListProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} variant={variant} />
      ))}
    </div>
  )
}
