"use client"

import Image from "next/image"
import Link from "next/link"

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

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-space-mono">Ürün Bulunamadı</h1>
          <Link href="/urunler" className="text-[#F7374F] hover:text-[#F7374F]/80">
            Ürünlere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1400px] h-[90px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="relative w-[120px] md:w-[140px] h-[48px] md:h-[56px] group">
              <Image
                src="/ngisiklogo.png"
                alt="NG IŞIK Logo"
                fill
                className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                priority
              />
              <Image
                src="/nglogo.png"
                alt="NG IŞIK Logo"
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link href="/kurumsal" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                Kurumsal
              </Link>
              <Link href="/hizmetler" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                Hizmetler
              </Link>
              <Link href="/urunler" className="text-sm font-medium tracking-wider text-[#F7374F] transition-colors">
                Ürünler
              </Link>
              <Link href="/iletisim" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                İletişim
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/iletisim" 
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#F7374F] rounded-full hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300"
              >
                İletişime Geçin
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-50 rounded-md">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-[#F7374F]">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-[#F7374F]">Ürünler</Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 font-space-mono">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8 font-space-mono-regular">{product.description}</p>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 font-space-mono">Özellikler</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 font-space-mono-regular">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/iletisim"
                className="inline-block px-8 py-4 bg-[#F7374F] text-white rounded-lg hover:bg-[#F7374F]/90 transition-all duration-300"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 