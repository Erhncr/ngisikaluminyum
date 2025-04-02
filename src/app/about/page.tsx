import Image from "next/image"
import Link from "next/link"

export default function About() {
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
                href="/teklif" 
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#F7374F] rounded-full hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300 -ml-10"
              >
                Teklif Al
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

      {/* About Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
          
          {/* Company Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">NG IŞIK Alüminyum</h2>
              <p className="text-gray-600 mb-4">
                20 yılı aşkın tecrübemizle, alüminyum sektöründe kalite ve güvenin adresi olmaya devam ediyoruz. Modern teknoloji ve uzman kadromuzla, yaşam alanlarınız için en iyi çözümleri sunuyoruz.
              </p>
              <p className="text-gray-600">
                Müşteri memnuniyeti odaklı yaklaşımımız ve sürdürülebilir kalite anlayışımızla, sektörde öncü konumumuzu koruyoruz.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Whatsapp Image 2025-03-24 at 01.41.00.jpeg"
                alt="NG IŞIK Alüminyum"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kalite</h3>
                <p className="text-gray-600">
                  En yüksek kalite standartlarında üretim ve hizmet sunuyoruz.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hız</h3>
                <p className="text-gray-600">
                  Zamanında teslimat ve hızlı çözümler sunuyoruz.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Müşteri Odaklılık</h3>
                <p className="text-gray-600">
                  Müşteri memnuniyeti bizim için her şeyden önemli.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#F7374F] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Bizimle Çalışmak İster misiniz?</h2>
            <p className="text-lg mb-8">
              Kaliteli ve güvenilir alüminyum çözümleri için hemen iletişime geçin.
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