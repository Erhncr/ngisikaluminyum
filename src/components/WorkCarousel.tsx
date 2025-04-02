"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface WorkCarouselProps {
  images: string[]
}

export function WorkCarousel({ images }: WorkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const filteredImages = images.filter(img => img !== "ngisiklogo.png")

  const nextSlide = () => {
    if (currentIndex + 3 < filteredImages.length) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const visibleImages = filteredImages.slice(currentIndex, currentIndex + 3)
  const canGoNext = currentIndex + 3 < filteredImages.length
  const canGoPrev = currentIndex > 0

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {canGoPrev && (
        <button
          onClick={prevSlide}
          className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          aria-label="Önceki görseller"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}
      {canGoNext && (
        <button
          onClick={nextSlide}
          className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          aria-label="Sonraki görseller"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Images Container */}
      <div className="grid grid-cols-3 gap-6">
        {visibleImages.map((image, index) => (
          <div
            key={currentIndex + index}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 group"
          >
            <Image
              src={`/${image}`}
              alt={`Üretim Görseli ${currentIndex + index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Detayları Gör</span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 3) === i ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 