import Image from "next/image"
import Link from "next/link"

interface ServiceDetailProps {
  params: {
    slug: string
  }
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1400px] h-[90px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="relative w-[120px] md:w-[140px] h-[48px] md:h-[56px]">
              <Image
                src="/nglogo.png"
                alt="NG IŞIK Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link href="/kurumsal" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                KURUMSAL
              </Link>
              <Link href="/hizmetler" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                HİZMETLER
              </Link>
              <Link href="/urunler" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                ÜRÜNLER
              </Link>
              <Link href="/iletisim" className="text-sm font-medium tracking-wider text-gray-900 hover:text-[#F7374F] transition-colors">
                İLETİŞİM
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

      {/* Service Detail Content */}
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#F7374F]">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-500 hover:text-[#F7374F]">
                  Hizmetler
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900">
                Hizmet Detayı
              </li>
            </ol>
          </nav>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Service Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/service-detail.jpg"
                alt="Hizmet Detay Görseli"
                fill
                className="object-cover"
              />
            </div>

            {/* Service Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Alüminyum Pencere Sistemleri</h1>
                <p className="text-gray-600">
                  Modern mimariye uygun, enerji tasarruflu ve dayanıklı alüminyum pencere sistemlerimiz ile yaşam alanlarınızı yenileyin.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hizmet Özellikleri</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Ücretsiz keşif ve ölçüm</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Profesyonel montaj</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Garantili hizmet</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Teknik destek</span>
                  </li>
                </ul>
              </div>

              {/* Process */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hizmet Süreci</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F7374F] text-white flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">İletişim</h3>
                      <p className="text-gray-600">Bizimle iletişime geçin ve talebinizi iletin.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F7374F] text-white flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Keşif</h3>
                      <p className="text-gray-600">Uzman ekibimiz keşif için sizi ziyaret eder.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F7374F] text-white flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Teklif</h3>
                      <p className="text-gray-600">Size özel teklifimizi hazırlar ve sunarız.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F7374F] text-white flex items-center justify-center flex-shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Uygulama</h3>
                      <p className="text-gray-600">Profesyonel ekibimizle hizmeti gerçekleştiririz.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <Link
                  href="/iletisim"
                  className="inline-block px-8 py-4 bg-[#F7374F] text-white rounded-lg hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300"
                >
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12">Diğer Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/service-1.jpg"
                    alt="Hizmet 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">PVC Pencere Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Modern ve dayanıklı PVC pencere sistemleri ile yaşam alanlarınızı yenileyin.
                </p>
                <Link
                  href="/hizmetler/pvc-pencere-sistemleri"
                  className="text-[#F7374F] font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>

              {/* Service Card 2 */}
              <div className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/service-2.jpg"
                    alt="Hizmet 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alüminyum Kapı Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Şık ve güvenli alüminyum kapı sistemleri ile mekanlarınızı güçlendirin.
                </p>
                <Link
                  href="/hizmetler/aluminyum-kapi-sistemleri"
                  className="text-[#F7374F] font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>

              {/* Service Card 3 */}
              <div className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/service-3.jpg"
                    alt="Hizmet 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cephe Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Modern mimariye uygun cephe sistemleri ile binalarınızı yenileyin.
                </p>
                <Link
                  href="/hizmetler/cephe-sistemleri"
                  className="text-[#F7374F] font-medium hover:underline"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 