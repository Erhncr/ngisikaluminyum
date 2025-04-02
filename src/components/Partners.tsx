"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const REFERENCES = [
  "/referanslar/3.png",
  "/referanslar/4.png",
  "/referanslar/5.png",
  "/referanslar/6.png",
  "/referanslar/7.png"
]

export function Partners() {
  const [availableLogos, setAvailableLogos] = useState<string[]>([])

  useEffect(() => {
    // Check which logos exist
    Promise.all(
      REFERENCES.map(logo =>
        fetch(logo)
          .then(res => res.ok ? logo : null)
          .catch(() => null)
      )
    ).then(results => {
      setAvailableLogos(results.filter((logo): logo is string => logo !== null))
    })
  }, [])

  // Don't render the section if no logos are available
  if (availableLogos.length === 0) return null

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Referanslar
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 items-center justify-items-center">
          {availableLogos.map((logo, index) => (
            <div 
              key={index}
              className="w-full h-28 flex items-center justify-center p-6 bg-white rounded-lg hover:bg-gray-50/50 transition-colors duration-300"
            >
              <Image
                src={logo}
                alt={`Referans ${index + 3}`}
                width={160}
                height={80}
                className="w-auto h-auto max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                priority={index < 2}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  // Remove this logo from available logos if it fails to load
                  setAvailableLogos(prev => prev.filter(l => l !== logo))
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 