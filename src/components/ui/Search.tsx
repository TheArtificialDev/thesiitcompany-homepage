'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, Filter, SortAsc, SortDesc } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { Input } from './Input'

interface SearchFilter {
  key: string
  label: string
  type: 'select' | 'checkbox' | 'date' | 'range'
  options?: { value: string; label: string }[]
  value?: any
}

interface SortOption {
  key: string
  label: string
  direction: 'asc' | 'desc'
}

interface SearchProps {
  placeholder?: string
  onSearch: (query: string, filters: Record<string, any>, sort?: SortOption) => void
  filters?: SearchFilter[]
  sortOptions?: SortOption[]
  showFilterButton?: boolean
  showSortButton?: boolean
  className?: string
  debounceMs?: number
}

export function AdvancedSearch({
  placeholder = 'Search...',
  onSearch,
  filters = [],
  sortOptions = [],
  showFilterButton = true,
  showSortButton = true,
  className,
  debounceMs = 300
}: SearchProps) {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [showSort, setShowSort] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({})
  const [activeSort, setActiveSort] = useState<SortOption | undefined>()
  
  const searchRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Debounced search
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(query, activeFilters, activeSort)
    }, debounceMs)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [query, activeFilters, activeSort, onSearch, debounceMs])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowFilters(false)
        setShowSort(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const clearSearch = () => {
    setQuery('')
    setActiveFilters({})
    setActiveSort(undefined)
  }

  const updateFilter = (key: string, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const removeFilter = (key: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev }
      delete newFilters[key]
      return newFilters
    })
  }

  const hasActiveFilters = Object.keys(activeFilters).length > 0 || activeSort

  return (
    <div ref={searchRef} className={cn('relative w-full max-w-2xl', className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-slate" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-20"
        />
        
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {/* Filter Button */}
          {showFilterButton && filters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                'h-7 w-7 p-0',
                (showFilters || Object.keys(activeFilters).length > 0) && 'bg-primary-blue text-white'
              )}
            >
              <Filter className="h-3 w-3" />
            </Button>
          )}

          {/* Sort Button */}
          {showSortButton && sortOptions.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSort(!showSort)}
              className={cn(
                'h-7 w-7 p-0',
                (showSort || activeSort) && 'bg-primary-blue text-white'
              )}
            >
              {activeSort?.direction === 'desc' ? (
                <SortDesc className="h-3 w-3" />
              ) : (
                <SortAsc className="h-3 w-3" />
              )}
            </Button>
          )}

          {/* Clear Button */}
          {(query || hasActiveFilters) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-7 w-7 p-0"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.entries(activeFilters).map(([key, value]) => {
            const filter = filters.find(f => f.key === key)
            if (!filter || !value) return null

            return (
              <div
                key={key}
                className="inline-flex items-center gap-1 bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-md text-sm"
              >
                <span>{filter.label}: {Array.isArray(value) ? value.join(', ') : value}</span>
                <button
                  onClick={() => removeFilter(key)}
                  className="hover:bg-primary-blue/20 rounded p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )
          })}
          
          {activeSort && (
            <div className="inline-flex items-center gap-1 bg-primary-blue/10 text-primary-blue px-2 py-1 rounded-md text-sm">
              <span>Sort: {activeSort.label} ({activeSort.direction})</span>
              <button
                onClick={() => setActiveSort(undefined)}
                className="hover:bg-primary-blue/20 rounded p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Filters Dropdown */}
      {showFilters && filters.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-slate/20 rounded-lg shadow-lg p-4 z-50">
          <div className="space-y-4">
            {filters.map((filter) => (
              <div key={filter.key}>
                <label className="block text-sm font-medium text-neutral-charcoal mb-2">
                  {filter.label}
                </label>
                
                {filter.type === 'select' && filter.options && (
                  <select
                    value={activeFilters[filter.key] || ''}
                    onChange={(e) => updateFilter(filter.key, e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  >
                    <option value="">All</option>
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                
                {filter.type === 'checkbox' && filter.options && (
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={(activeFilters[filter.key] || []).includes(option.value)}
                          onChange={(e) => {
                            const currentValues = activeFilters[filter.key] || []
                            const newValues = e.target.checked
                              ? [...currentValues, option.value]
                              : currentValues.filter((v: string) => v !== option.value)
                            updateFilter(filter.key, newValues.length > 0 ? newValues : undefined)
                          }}
                          className="mr-2 rounded border-neutral-slate/20 text-primary-blue focus:ring-primary-blue"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
                
                {filter.type === 'date' && (
                  <input
                    type="date"
                    value={activeFilters[filter.key] || ''}
                    onChange={(e) => updateFilter(filter.key, e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sort Dropdown */}
      {showSort && sortOptions.length > 0 && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-neutral-slate/20 rounded-lg shadow-lg p-2 z-50 min-w-48">
          <div className="space-y-1">
            {sortOptions.map((option) => (
              <button
                key={`${option.key}-${option.direction}`}
                onClick={() => {
                  setActiveSort(option)
                  setShowSort(false)
                }}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-slate/10',
                  activeSort?.key === option.key && activeSort?.direction === option.direction &&
                    'bg-primary-blue text-white'
                )}
              >
                {option.label} ({option.direction === 'asc' ? 'A-Z' : 'Z-A'})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Simple Search Component (without filters)
interface SimpleSearchProps {
  placeholder?: string
  onSearch: (query: string) => void
  className?: string
  debounceMs?: number
}

export function SimpleSearch({
  placeholder = 'Search...',
  onSearch,
  className,
  debounceMs = 300
}: SimpleSearchProps) {
  const [query, setQuery] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      onSearch(query)
    }, debounceMs)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [query, onSearch, debounceMs])

  return (
    <div className={cn('relative w-full max-w-md', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-slate" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 pr-10"
      />
      {query && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setQuery('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  )
}
