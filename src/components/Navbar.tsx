"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="relative w-[140px] h-[56px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={isHovered ? "/nglogohover.png" : "/nglogo.png"}
              alt="NGISIK Logo"
              fill
              className="object-contain transition-opacity duration-200"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Anasayfa
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Hakkımızda
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Ürünler
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Projeler
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 