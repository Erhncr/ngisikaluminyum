import Image from "next/image"
import Link from "next/link"

export default function Corporate() {
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

      {/* Corporate Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Kurumsal</h1>
          
          {/* Company History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Tarihçemiz</h2>
              <p className="text-gray-600 mb-4">
                2000 yılında kurulan NG IŞIK Alüminyum, alüminyum sektöründe 20 yılı aşkın tecrübesiyle müşterilerine en kaliteli hizmeti sunmaktadır. Modern teknoloji ve uzman kadromuzla, yaşam alanlarınız için en iyi çözümleri üretiyoruz.
              </p>
              <p className="text-gray-600">
                Sektördeki yenilikleri yakından takip eden firmamız, sürekli gelişim ve değişim içerisinde olup, müşteri memnuniyetini her zaman ön planda tutmaktadır.
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

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Müşterilerimize en kaliteli alüminyum çözümlerini sunarak, yaşam alanlarını daha konforlu ve estetik hale getirmek.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#F7374F]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7374F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Alüminyum sektöründe öncü ve yenilikçi yaklaşımlarla, müşterilerimize en iyi hizmeti sunan güvenilir bir marka olmak.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Ekibimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.01.jpeg"
                    alt="Takım Üyesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">Ahmet Yılmaz</h3>
                <p className="text-gray-600">Genel Müdür</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.02.jpeg"
                    alt="Takım Üyesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">Mehmet Demir</h3>
                <p className="text-gray-600">Teknik Müdür</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.03.jpeg"
                    alt="Takım Üyesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">Ayşe Kaya</h3>
                <p className="text-gray-600">Satış Müdürü</p>
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