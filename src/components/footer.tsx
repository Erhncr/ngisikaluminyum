import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

const mainNavLinks = [
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#istatistikler", label: "Sonuçlar" },
  { href: "#yontem", label: "Yöntem" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#indir", label: "İndir" },
]

const legalLinks = [
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
]

export function Footer() {
  return (
    <footer className="bg-black text-gray-light py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/ngisiklogo.png"
                alt="Parlak Zeka"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
              {/* Optional: Add text logo */}
              {/* <span className="font-semibold text-lg text-white">[Şirket Adı]</span> */}
            </Link>
            <p className="text-sm text-gray-medium">
              Bilsem sınavına hazırlıkta yapay zeka destekli kişisel koçluk ve oyunlaştırılmış öğrenme deneyimi.
            </p>
          </div>

          {/* Quick Links (Main Nav + Legal) */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-1">
              {[...mainNavLinks, ...legalLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-medium hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information (Placeholders) */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <address className="not-italic text-sm text-gray-medium">
              Bilkent Cyberpark<br />
              Çankaya / Ankara<br />
              Phone: <a href="tel:+905300000000" className="hover:underline hover:text-white">+90 (530) 000 00 00</a><br />
              Email: <a href="mailto:destek@parlakzeka.app" className="hover:underline hover:text-white">destek@parlakzeka.app</a>
            </address>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-5 w-5 text-gray-medium hover:text-white" />
              </Link>
              <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5 text-gray-medium hover:text-white" />
              </Link>
              <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-5 w-5 text-gray-medium hover:text-white" />
              </Link>
               <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5 text-gray-medium hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-dark pt-4 text-center text-sm text-gray-dark">
          © {new Date().getFullYear()} Parlak Zeka. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}