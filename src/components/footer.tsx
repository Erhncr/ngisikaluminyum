import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react' // Removed MountainIcon

// Footer links based on PRD
const footerLinks = [
  { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
  { href: '/iletisim', label: 'İletişim' },
]

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description - Use Image component */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/ngisiklogo.png"
                alt="NG Işık Alüminyum Logo"
                width={32} // Slightly smaller for footer
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-semibold text-lg text-white">NG Işık Alüminyum</span>
            </Link>
            <p className="text-sm text-gray-400">
              Kaliteli ve estetik sineklik çözümleri.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Hızlı Bağlantılar</h4>
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-200 hover:underline"
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
            <h4 className="font-semibold text-white">İletişim</h4>
            <address className="not-italic text-sm text-gray-400">
              Veysel Karani, Küçükbalıklı Cd. no:113, 16270 Osmangazi̇/Bursa<br />
              Telefon: <a href="tel:+905367277217" className="hover:underline hover:text-gray-200">0536 727 72 17</a><br />
              Email: <a href="mailto:info@ngisikaluminyum.com" className="hover:underline hover:text-gray-200">info@ngisikaluminyum.com</a>
            </address>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Bizi Takip Edin</h4>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 text-gray-400 hover:text-gray-200" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 text-gray-400 hover:text-gray-200" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 text-gray-400 hover:text-gray-200" />
              </Link>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NG Işık Alüminyum. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
} 