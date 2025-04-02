import Image from "next/image"
import Link from "next/link"

export default function Contact() {
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

      {/* Contact Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">İletişim</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7374F] focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#F7374F] text-white rounded-lg hover:bg-white hover:text-[#F7374F] border-2 border-[#F7374F] transition-all duration-300"
                >
                  Gönder
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Örnek Mahallesi, Örnek Sokak No:123<br />
                    Kadıköy/İstanbul
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Telefon</h3>
                  <p className="text-gray-600">+90 216 222 22 22</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">E-posta</h3>
                  <p className="text-gray-600">info@ngisik.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-600">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 