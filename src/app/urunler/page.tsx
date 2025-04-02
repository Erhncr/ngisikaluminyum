import Image from "next/image"
import Link from "next/link"

export default function Products() {
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

      {/* Products Content */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Ürünlerimiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/Whatsapp Image 2025-03-24 at 01.40.58.jpeg"
                  alt="Ürün 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Alüminyum Pencere Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Yüksek ısı yalıtımı ve ses izolasyonu sağlayan modern pencere sistemleri.
                </p>
                <Link
                  href="/urunler/aluminyum-pencere"
                  className="inline-block px-4 py-2 text-sm font-medium text-[#F7374F] hover:text-white bg-white hover:bg-[#F7374F] border-2 border-[#F7374F] rounded-lg transition-all duration-300"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/Whatsapp Image 2025-03-24 at 01.40.59.jpeg"
                  alt="Ürün 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Alüminyum Kapı Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Güvenlik ve estetiği bir araya getiren kapı çözümleri.
                </p>
                <Link
                  href="/urunler/aluminyum-kapi"
                  className="inline-block px-4 py-2 text-sm font-medium text-[#F7374F] hover:text-white bg-white hover:bg-[#F7374F] border-2 border-[#F7374F] rounded-lg transition-all duration-300"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/Whatsapp Image 2025-03-24 at 01.40.59 (1).jpeg"
                  alt="Ürün 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cephe Sistemleri</h3>
                <p className="text-gray-600 mb-4">
                  Modern binalar için özel tasarlanmış cephe çözümleri.
                </p>
                <Link
                  href="/urunler/cephe-sistemleri"
                  className="inline-block px-4 py-2 text-sm font-medium text-[#F7374F] hover:text-white bg-white hover:bg-[#F7374F] border-2 border-[#F7374F] rounded-lg transition-all duration-300"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 