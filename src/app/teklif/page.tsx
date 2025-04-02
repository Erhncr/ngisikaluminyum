import Image from "next/image"
import Link from "next/link"

export default function Quote() {
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

      {/* Quote Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Teklif Alın</h1>
          
          {/* Quote Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Projeniz İçin Teklif Alın</h2>
                <p className="text-gray-600 mb-8">
                  Size özel çözümler için lütfen aşağıdaki formu doldurun. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                  >
                    <option value="">Seçiniz</option>
                    <option value="pencere">Alüminyum Pencere Sistemleri</option>
                    <option value="kapi">Alüminyum Kapı Sistemleri</option>
                    <option value="cephe">Alüminyum Cephe Sistemleri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                    placeholder="Projeniz hakkında detaylı bilgi veriniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#F7374F] text-white rounded-lg hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300"
                >
                  Teklif İste
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Neden Biz?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">20 yılı aşkın sektör deneyimi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Uzman teknik kadro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Kaliteli malzeme kullanımı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#F7374F] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Rekabetçi fiyatlandırma</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F7374F] rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+90 216 222 22 22</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@ngisik.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>İstanbul, Türkiye</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 