import Image from "next/image"
import Link from "next/link"

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="w-[1400px] h-[90px] mx-auto px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="relative w-[140px] h-[56px]">
              <Image
                src="/nglogo.png"
                alt="NG IŞIK Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
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
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#F7374F] rounded-full hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300 -ml-10"
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

      {/* Services Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hizmetlerimiz</h1>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Alüminyum Pencere Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                Modern ve enerji verimli alüminyum pencere sistemleri ile yaşam alanlarınızı daha konforlu hale getiriyoruz.
              </p>
              <Link href="/urunler" className="text-[#F7374F] font-medium hover:text-[#F7374F]/80 transition-colors">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Alüminyum Kapı Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                Dayanıklı ve estetik alüminyum kapı sistemleri ile güvenli ve şık çözümler sunuyoruz.
              </p>
              <Link href="/urunler" className="text-[#F7374F] font-medium hover:text-[#F7374F]/80 transition-colors">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Alüminyum Cephe Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                Modern mimariye uygun alüminyum cephe sistemleri ile binalarınıza değer katıyoruz.
              </p>
              <Link href="/urunler" className="text-[#F7374F] font-medium hover:text-[#F7374F]/80 transition-colors">
                Detaylı Bilgi →
              </Link>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Çalışma Sürecimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7374F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F7374F]">1</span>
                </div>
                <h3 className="font-semibold mb-2">İletişim</h3>
                <p className="text-gray-600 text-sm">İhtiyaçlarınızı dinliyoruz</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7374F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F7374F]">2</span>
                </div>
                <h3 className="font-semibold mb-2">Ölçüm</h3>
                <p className="text-gray-600 text-sm">Detaylı ölçüm yapıyoruz</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7374F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F7374F]">3</span>
                </div>
                <h3 className="font-semibold mb-2">Teklif</h3>
                <p className="text-gray-600 text-sm">Uygun teklif sunuyoruz</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7374F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F7374F]">4</span>
                </div>
                <h3 className="font-semibold mb-2">Uygulama</h3>
                <p className="text-gray-600 text-sm">Profesyonel montaj yapıyoruz</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#F7374F] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz Hakkında Bilgi Alın</h2>
            <p className="text-lg mb-8">
              Detaylı bilgi ve teklif için hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-block px-8 py-4 bg-white text-[#F7374F] rounded-lg hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 