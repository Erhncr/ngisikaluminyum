"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function About() {
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
            alt="NG IŞIK Hakkımızda"
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
            Hakkımızda
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
                  alt="Hakkımızda"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                  alt="Hakkımızda"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ekibimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel ve deneyimli ekibimizle kaliteli hizmet sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * member }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-[300px]">
                  <Image
                    src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                    alt={`Ekip Üyesi ${member}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Ekip Üyesi {member}
                  </h3>
                  <p className="text-gray-600">
                    Pozisyon
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
} 