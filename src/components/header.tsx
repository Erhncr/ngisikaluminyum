import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react' // Removed MountainIcon
import { ThemeToggle } from "@/components/theme-toggle" // Import ThemeToggle

// Navigation links based on PRD
const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  {
    href: '/urunler',
    label: 'Ürünler',
    // Sublinks could be added later for dropdown menu on desktop
    // subLinks: [
    //   { href: '/urunler/pencere-sineklik', label: 'Pencere Sineklikleri' },
    //   { href: '/urunler/kapi-sineklik', label: 'Kapı Sineklikleri' },
    // ],
  },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
  // { href: '/blog', label: 'Blog' }, // Optional blog link
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        {/* Logo/Brand Name - Use Image component */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/ngisiklogo.png" // Path relative to the public directory
            alt="NG Işık Alüminyum Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-8 w-auto" // Adjust height and maintain aspect ratio
          />
          {/* Optional: Keep text logo next to image if desired */}
          {/* <span className="font-bold">NG Işık Alüminyum</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center space-x-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side items: Theme Toggle (Desktop) & Mobile Menu Trigger */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Theme Toggle visible on larger screens */}
          <div className="hidden lg:block">
             <ThemeToggle />
          </div>

          {/* Mobile Navigation Trigger (Hamburger Menu) */}
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
                  {/* Mobile Logo - Use Image component */}
                  <Link href="/" className="mb-4 flex items-center space-x-2">
                    <Image
                        src="/ngisiklogo.png"
                        alt="NG Işık Alüminyum Logo"
                        width={32} // Slightly smaller for mobile menu
                        height={32}
                        className="h-8 w-auto"
                    />
                    {/* <span className="font-bold">NG Işık Alüminyum</span> */}
                  </Link>
                  {/* Mobile Navigation Links */}
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Theme Toggle inside Mobile Menu */}
                  <div className="mt-4 border-t pt-4">
                     <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Optional: Call to action button in header */}
        {/* <div className="hidden lg:flex items-center justify-end flex-1">*/}
        {/*   <Button>Teklif Al</Button> */}
        {/* </div> */}

      </div>
    </header>
  )
} 