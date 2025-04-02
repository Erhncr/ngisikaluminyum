import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Sayfa bulunamadı</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#F7374F] text-white rounded-lg border-2 border-transparent hover:bg-white hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
} 