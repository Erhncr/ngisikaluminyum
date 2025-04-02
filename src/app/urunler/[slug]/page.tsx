"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface ProductDetailProps {
  params: {
    slug: string
  }
}

const products = {
  "aluminyum-pencere-sistemleri": {
    title: "Alüminyum Pencere Sistemleri",
    description: "Modern mimariye uygun, enerji tasarruflu ve dayanıklı alüminyum pencere sistemleri.",
    features: [
      "Isı ve ses yalıtımı",
      "UV korumalı",
      "Kolay temizlenebilir",
      "Dayanıklı malzeme",
      "Modern tasarım",
      "Özelleştirilebilir renk seçenekleri"
    ],
    images: [
      "/Whatsapp Image 2025-03-24 at 01.41.00.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.01.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.02.jpeg"
    ]
  },
  "aluminyum-kapi-sistemleri": {
    title: "Alüminyum Kapı Sistemleri",
    description: "Şık ve güvenli alüminyum kapı sistemleri ile mekanlarınızı güçlendirin.",
    features: [
      "Yüksek güvenlik",
      "Dayanıklı yapı",
      "Modern görünüm",
      "Kolay kullanım",
      "Özelleştirilebilir tasarım",
      "Geniş renk seçeneği"
    ],
    images: [
      "/Whatsapp Image 2025-03-24 at 01.41.01.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.02.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.00.jpeg"
    ]
  },
  "cephe-sistemleri": {
    title: "Cephe Sistemleri",
    description: "Modern mimariye uygun cephe sistemleri ile binalarınızı yenileyin.",
    features: [
      "Yüksek ısı yalıtımı",
      "UV koruması",
      "Dayanıklı malzeme",
      "Modern tasarım",
      "Kolay bakım",
      "Özelleştirilebilir seçenekler"
    ],
    images: [
      "/Whatsapp Image 2025-03-24 at 01.41.02.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.00.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.01.jpeg"
    ]
  },
  "sineklik-sistemleri": {
    title: "Sineklik Sistemleri",
    description: "Pratik ve estetik sineklik sistemleri ile yaşam alanlarınızı koruyun.",
    features: [
      "Kolay kullanım",
      "Estetik tasarım",
      "Dayanıklı malzeme",
      "Çeşitli renk seçenekleri",
      "Kolay temizlenebilir",
      "Özelleştirilebilir boyutlar"
    ],
    images: [
      "/illustrations/sineklik.png",
      "/Whatsapp Image 2025-03-24 at 01.41.00.jpeg",
      "/Whatsapp Image 2025-03-24 at 01.41.01.jpeg"
    ]
  }
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products[params.slug as keyof typeof products]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { ref: featuresRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
          <Link
            href="/urunler"
            className="text-[#FB4141] hover:text-[#F7374F] transition-colors duration-300"
          >
            Ürünlere Dön
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.png"
              alt="NG IŞIK Logo"
              width={120}
              height={40}
              className="transition-opacity duration-300 hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

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
        </nav>

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

      {/* Product Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
          >
            <Link href="/" className="hover:text-[#FB4141] transition-colors duration-300">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-[#FB4141] transition-colors duration-300">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </motion.div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-[100px] rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index ? "ring-2 ring-[#FB4141]" : ""
                    }`}
                    aria-label={`${index + 1}. görsele geç`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{product.description}</p>

              {/* Features */}
              <motion.div
                ref={featuresRef}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Özellikler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-[#FB4141]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/iletisim"
                  className="inline-block bg-[#FB4141] text-white px-8 py-3 rounded-full text-lg hover:bg-[#F7374F] transition-colors duration-300"
                  aria-label="İletişime Geç"
                >
                  İletişime Geç
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

const navLinks = [
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/iletisim", label: "İletişim" }
] 