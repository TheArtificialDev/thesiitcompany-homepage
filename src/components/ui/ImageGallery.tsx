'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { Modal } from './Modal'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
  enableLightbox?: boolean
}

const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
}

const spacingClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6'
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  auto: ''
}

export function ImageGallery({
  images,
  columns = 3,
  aspectRatio = 'auto',
  spacing = 'md',
  className,
  enableLightbox = true
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setCurrentImageIndex(index)
      setLightboxOpen(true)
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className={cn(
        'grid',
        columnClasses[columns],
        spacingClasses[spacing],
        className
      )}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'group relative overflow-hidden rounded-lg bg-neutral-slate/10',
              aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
              enableLightbox && 'cursor-pointer'
            )}
            onClick={() => openLightbox(index)}
          >
{aspectRatio !== 'auto' ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={cn(
                  'object-cover transition-transform duration-300',
                  enableLightbox && 'group-hover:scale-105'
                )}
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 500}
                height={image.height ?? 300}
                className={cn(
                  'w-full h-auto transition-transform duration-300',
                  enableLightbox && 'group-hover:scale-105'
                )}
              />
            )}
            
            {enableLightbox && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {enableLightbox && (
        <Modal
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          size="xl"
          showCloseButton={false}
          className="bg-black max-w-none w-full h-full m-0 rounded-none flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 h-10 w-10 p-0"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 p-0"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 h-12 w-12 p-0"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Current Image */}
            <div className="max-w-full max-h-full p-8">
              {images[currentImageIndex] && (
                <>
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    width={images[currentImageIndex].width ?? 1200}
                    height={images[currentImageIndex].height ?? 800}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {images[currentImageIndex].caption && (
                    <div className="text-center mt-4">
                      <p className="text-white text-lg">{images[currentImageIndex].caption}</p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  )
}

// Masonry Gallery Component
interface MasonryGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  className?: string
}

export function MasonryGallery({ images, columns = 3, className }: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  // Distribute images across columns
  const imageColumns: GalleryImage[][] = Array.from({ length: columns }, () => [])
  
  images.forEach((image, index) => {
    const columnIndex = index % columns
    imageColumns[columnIndex]?.push(image)
  })

  return (
    <>
      <div className={cn('flex gap-4', className)}>
        {imageColumns.map((columnImages, columnIndex) => (
          <div key={columnIndex} className="flex-1 space-y-4">
            {columnImages.map((image, imageIndex) => {
              const globalIndex = columnIndex + imageIndex * columns
              return (
                <div
                  key={globalIndex}
                  className="group relative overflow-hidden rounded-lg bg-neutral-slate/10 cursor-pointer"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 400}
                    height={image.height ?? 300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Lightbox - reusing the same Modal as above */}
      <Modal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        size="xl"
        showCloseButton={false}
        className="bg-black max-w-none w-full h-full m-0 rounded-none flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 h-10 w-10 p-0"
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="max-w-full max-h-full p-8">
            {images[currentImageIndex] && (
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={images[currentImageIndex].width ?? 1200}
                height={images[currentImageIndex].height ?? 800}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}
