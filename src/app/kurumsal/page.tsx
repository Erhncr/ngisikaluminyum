"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Corporate() {
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
            alt="NG IŞIK Kurumsal"
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
            Kurumsal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            1995'ten beri kaliteli ve güvenilir çözümler sunuyoruz
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                20 Yıllık Deneyim ve Profesyonel Hizmet
              </h2>
              <p className="text-gray-600 mb-6">
                Modern mimariye uygun alüminyum sistemleri üretiyor ve montajını gerçekleştiriyoruz. Müşteri memnuniyeti ve kalite odaklı çalışma prensibiyle, yaşam alanlarınızı yeniliyoruz.
              </p>
              <p className="text-gray-600 mb-8">
                Profesyonel ekibimiz ve modern ekipmanlarımızla kaliteli hizmet sunuyoruz. Tüm ürünlerimiz garantilidir ve teknik destek hizmeti sunuyoruz.
              </p>
              <Link
                href="/iletisim"
                className="inline-block bg-[#FB4141] text-white px-8 py-3 rounded-full text-lg hover:bg-[#F7374F] transition-colors duration-300"
              >
                İletişime Geç
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                  alt="Kurumsal"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                  alt="Kurumsal"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Değerlerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kalite, güven ve müşteri memnuniyeti odaklı çalışıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kalite",
                description: "En yüksek kalite standartlarında üretim ve hizmet sunuyoruz.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Güven",
                description: "Müşterilerimize güvenilir ve sürdürülebilir çözümler sunuyoruz.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Müşteri Memnuniyeti",
                description: "Müşteri memnuniyeti bizim için her şeyden önemli.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500"
              >
                <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                  <div className="text-white group-hover:text-[#FB4141] transition-colors duration-500">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
} 