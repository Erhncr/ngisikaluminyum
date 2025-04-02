"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative w-[140px] h-[56px]">
            <Image
              src="/nglogo.png"
              alt="NGISIK Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-medium tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              ANASAYFA
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              HAKKIMIZDA
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              ÜRÜNLER
            </Link>
          </nav>

          {/* Right Side - Contact Button Only */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 