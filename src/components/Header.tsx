"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/kurumsal", label: "KURUMSAL" },
  { href: "/hizmetler", label: "HİZMETLER" },
  { href: "/urunler", label: "ÜRÜNLER" },
  { href: "/iletisim", label: "İLETİŞİM" }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-[1400px] h-[80px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] md:w-[140px] h-[48px] md:h-[56px] group" aria-label="NG IŞIK Ana Sayfa">
            <Image
              src="/ngisiklogo.png"
              alt="NG IŞIK Logo"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src="/nglogo.png"
              alt="NG IŞIK Logo Hover"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#FB4141] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FB4141] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="bg-[#FB4141] text-white px-6 py-2 rounded-full hover:bg-[#F7374F] transition-colors duration-300"
              aria-label="İletişime Geç"
            >
              İletişime Geç
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform duration-300" />
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity duration-300" />
            <div className="w-6 h-0.5 bg-gray-700 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl text-gray-700 hover:text-[#FB4141] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/iletisim"
                  className="bg-[#FB4141] text-white px-6 py-3 rounded-full text-center hover:bg-[#F7374F] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 