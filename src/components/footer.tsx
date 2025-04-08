import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Keep Image component
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react' // Added LinkedinIcon as an example

// Footer links based on logistics spec nav + common links
const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/company', label: 'Company' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/news', label: 'News' },
  { href: '/iletisim', label: 'Contact' }, // Changed from İletişim
]

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' }, // Updated href/label
  { href: '/terms-of-service', label: 'Terms of Service' }, // Updated href/label
]

export function Footer() {
  return (
    <footer className="bg-black text-gray-light py-8"> {/* Use gray-light from config */}
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/ngisiklogo.png" // Placeholder logo
                alt="Company Logo" // Updated alt text
                width={100} // Example width
                height={40} // Example height
                className="h-8 w-auto"
              />
              {/* Optional: Add text logo */}
              {/* <span className="font-semibold text-lg text-white">[Şirket Adı]</span> */}
            </Link>
            <p className="text-sm text-gray-medium"> {/* Use gray-medium */} 
              Your reliable partner for global cargo and logistics solutions.
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
                    className="text-sm text-gray-medium hover:text-white hover:underline" /* Use gray-medium */
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
            <address className="not-italic text-sm text-gray-medium"> {/* Use gray-medium */} 
              123 Logistics Way<br />
              Suite 400<br />
              Metropolis, ST 12345<br />
              Phone: <a href="tel:+15551234567" className="hover:underline hover:text-white">+1 (555) 123-4567</a><br />
              Email: <a href="mailto:contact@company.com" className="hover:underline hover:text-white">contact@company.com</a>
            </address>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-5 w-5 text-gray-medium hover:text-white" /> {/* Use gray-medium */} 
              </Link>
              <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5 text-gray-medium hover:text-white" /> {/* Use gray-medium */} 
              </Link>
              <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-5 w-5 text-gray-medium hover:text-white" /> {/* Use gray-medium */} 
              </Link>
               <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5 text-gray-medium hover:text-white" /> {/* Added LinkedIn */} 
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright - Updated Company Name */}
        <div className="mt-8 border-t border-gray-dark pt-4 text-center text-sm text-gray-dark"> {/* Use gray-dark */} 
          © {new Date().getFullYear()} [Şirket Adı]. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 