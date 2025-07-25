import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
  height?: 'sm' | 'md' | 'lg' | 'xl'
}

const heightClasses = {
  sm: 'h-4',
  md: 'h-6', 
  lg: 'h-8',
  xl: 'h-12'
}

export function Skeleton({ className, lines = 1, height = 'md', ...props }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse', className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'bg-neutral-slate/20 rounded-md mb-2 last:mb-0',
            heightClasses[height],
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

// Card Skeleton
export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="animate-pulse">
        <div className="h-4 bg-neutral-slate/20 rounded-md w-3/4 mb-4" />
        <div className="space-y-2">
          <div className="h-3 bg-neutral-slate/20 rounded-md" />
          <div className="h-3 bg-neutral-slate/20 rounded-md" />
          <div className="h-3 bg-neutral-slate/20 rounded-md w-5/6" />
        </div>
        <div className="h-8 bg-neutral-slate/20 rounded-md w-1/3 mt-4" />
      </div>
    </div>
  )
}

// Blog Post Skeleton
export function BlogPostSkeleton() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="animate-pulse">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-neutral-slate/20 rounded-lg" />
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              <div className="h-3 bg-neutral-slate/20 rounded w-12" />
              <div className="h-3 bg-neutral-slate/20 rounded w-16" />
            </div>
            <div className="h-4 bg-neutral-slate/20 rounded-md w-3/4 mb-2" />
            <div className="h-3 bg-neutral-slate/20 rounded-md mb-3" />
            <div className="flex justify-between items-center">
              <div className="h-3 bg-neutral-slate/20 rounded w-24" />
              <div className="h-6 bg-neutral-slate/20 rounded w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
