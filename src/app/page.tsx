"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { ref: statsRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={images[currentImage]}
            alt="NG IŞIK Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NG IŞIK
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Alüminyum ve PVC sistemleri ile yaşam alanlarınızı dönüştürüyoruz
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-[#FB4141] text-white px-8 py-3 rounded-full text-lg hover:bg-[#F7374F] transition-colors duration-300"
            aria-label="İletişime Geç"
          >
            İletişime Geç
          </Link>
        </motion.div>

        {/* Image Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`${index + 1}. görsele geç`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#FB4141] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="flex flex-col">
              <div className="relative w-[120px] h-[48px] mb-6 group">
                <Image
                  src="/ngisiklogo.png"
                  alt="NG IŞIK Logo"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/nglogo.png"
                  alt="NG IŞIK Logo Hover"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <p className="text-white/60 font-space-mono-regular mb-8">
                1995'ten beri kaliteli ve güvenilir çözümler sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FB4141] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FB4141] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-1.613-.114-2.186-.136-.585-.443-1.033-.829-1.344-.407-.312-.94-.468-1.601-.468-1.586 0-2.665 1.018-2.665 2.997v5.601h-3v-11h3v1.616c.526-.81 1.443-1.219 2.5-1.219 1.866 0 3.5 1.134 3.5 3.566v6.037z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">Hızlı Bağlantılar</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/kurumsal" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link href="/urunler" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">İletişim</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>İstanbul, Türkiye</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+90 (212) 123 45 67</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@ngisik.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">Bülten</h4>
              <p className="text-white/60 mb-4">
                Yeni ürünler ve kampanyalardan haberdar olmak için bültenimize abone olun.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FB4141]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FB4141] text-white rounded-lg hover:bg-[#F7374F] transition-colors duration-300"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
            <p>&copy; {new Date().getFullYear()} NG IŞIK. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </motion.main>
  )
}

const images = [
  "/Whatsapp Image 2025-03-24 at 01.41.00.jpeg",
  "/Whatsapp Image 2025-03-24 at 01.41.01.jpeg",
  "/Whatsapp Image 2025-03-24 at 01.41.02.jpeg"
]

const stats = [
  { value: "25", label: "Yıllık Tecrübe", suffix: "+" },
  { value: "1000", label: "Tamamlanan Proje", suffix: "+" },
  { value: "50", label: "Uzman Personel", suffix: "+" },
  { value: "98", label: "Müşteri Memnuniyeti", suffix: "%" }
] 