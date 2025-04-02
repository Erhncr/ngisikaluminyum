"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
            alt="NG IŞIK Hizmetler"
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
            Hizmetlerimiz
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Profesyonel ekibimiz ve modern ekipmanlarımızla kaliteli hizmet sunuyoruz
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Keşif ve Ölçüm</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Uzman ekibimiz keşif için sizi ziyaret eder ve projeniz için en uygun çözümü sunar.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Montaj</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Profesyonel ekibimizle hızlı ve kaliteli montaj hizmeti sunuyoruz.
              </p>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Garanti</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Tüm ürünlerimiz garantilidir ve teknik destek hizmeti sunuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FB4141]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Size Özel Çözümler İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Profesyonel ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-white text-[#FB4141] px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
} 