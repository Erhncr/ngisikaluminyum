import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react' // Removed MountainIcon
import { ThemeToggle } from "@/components/theme-toggle" // Import ThemeToggle

// Updated nav links based on the reference image style
const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  // { href: '/hakkimizda', label: 'Şirket' }, // Renamed from Hakkımızda
  { href: '/urunler', label: 'Ürünler' }, // Renamed from Hizmetler
  // { href: '/fiyatlandirma', label: 'Fiyatlandırma' }, // Added Pricing
  // { href: '/haberler', label: 'Haberler' }, // Added News
  { href: '/hakkimizda', label: 'Hakkımızda' }, // Keep About Us
]

export function Header() {
  return (
    // Remove background opacity/blur, make it solid white/dark background
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6"> {/* Increased height slightly */}
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/ngisiklogo.png"
            alt="NG Işık Alüminyum Logo"
            width={100} // Adjust width as needed for a potentially wider logo
            height={40}
            className="h-7 w-auto" // Adjust height
            priority // Prioritize loading the logo
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden flex-1 items-center justify-center space-x-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Use foreground color for links, slightly muted on hover
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side items: Contact Button, Theme Toggle, Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Contact Button (Desktop) */}
          <Button asChild className="hidden lg:inline-flex bg-primary hover:bg-primary/90">{/* Ensure primary red */}
            <Link href="/iletisim">İletişim</Link>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Menüyü Aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  {/* Mobile Logo */}
                  <Link href="/" className="mb-4 flex items-center space-x-2">
                    <Image
                        src="/ngisiklogo.png"
                        alt="NG Işık Alüminyum Logo"
                        width={32} // Slightly smaller for mobile menu
                        height={32}
                        className="h-8 w-auto"
                    />
                  </Link>

                  {/* Mobile Navigation Links */}
                  <nav className="grid gap-2">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        // Larger text for mobile menu
                        className="text-base font-medium text-foreground transition-colors hover:text-foreground/80"
                        >
                        {link.label}
                        </Link>
                    ))}
                  </nav>

                   {/* Contact Button (Mobile) */}
                   <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90">
                     <Link href="/iletisim">İletişim</Link>
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  )
} 