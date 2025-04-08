import React from 'react'
import Link from 'next/link'
import { MountainIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react' // Example social icons

// Footer links based on PRD
const footerLinks = [
  { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
  { href: '/iletisim', label: 'İletişim' },
]

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold text-lg">NG Işık Alüminyum</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kaliteli ve estetik sineklik çözümleri.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">Hızlı Bağlantılar</h4>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:underline dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">İletişim</h4>
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400">
              123 Örnek Cadde, Sanayi Bölgesi<br />
              Şehir, Ülke 12345<br />
              Telefon: <a href="tel:+905551234567" className="hover:underline">+90 555 123 45 67</a><br />
              Email: <a href="mailto:info@ngisikaluminyum.com" className="hover:underline">info@ngisikaluminyum.com</a>
            </address>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">Bizi Takip Edin</h4>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
              </Link>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} NG Işık Alüminyum. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
} 