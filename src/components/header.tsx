import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react' // Removed MountainIcon

// Updated nav links for the logistics site spec
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/company', label: 'Company' }, // Placeholder href
  { href: '/services', label: 'Services' }, // Placeholder href
  { href: '/pricing', label: 'Pricing' }, // Placeholder href
  { href: '/news', label: 'News' },       // Placeholder href
]

export function Header() {
  return (
    // Sticky header with background color based on theme (white/black)
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo - Assuming ngisiklogo.png is a placeholder */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/ngisiklogo.png" // Placeholder logo
            alt="Company Logo" // Updated alt text
            width={100}
            height={40}
            className="h-8 w-auto" // Adjusted height slightly
            priority
          />
          {/* Optionally add company name text here */}
          {/* <span className="font-semibold">[Şirket Adı]</span> */}
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden flex-1 items-center justify-center space-x-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Standard foreground text, slightly dimmer on hover
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side items: Contact Button, Mobile Menu */}
        <div className="flex items-center space-x-4"> {/* Adjusted spacing slightly */}
          {/* Contact Button (Desktop) - Primary Orange */}
          <Button asChild className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/iletisim">Contact</Link> {/* Updated text and href if needed */} 
          </Button>

          {/* Removed ThemeToggle */}

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span> {/* Updated text */}
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  {/* Mobile Logo */}
                  <Link href="/" className="mb-4 flex items-center space-x-2">
                    <Image
                        src="/ngisiklogo.png" // Placeholder
                        alt="Company Logo" // Updated alt text
                        width={80} // Adjusted size
                        height={32}
                        className="h-8 w-auto"
                    />
                  </Link>

                  {/* Mobile Navigation Links - Updated */}
                  <nav className="grid gap-2">
                    {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-foreground/80"
                        >
                        {link.label}
                        </Link>
                    ))}
                  </nav>

                   {/* Contact Button (Mobile) - Updated text */}
                   <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                     <Link href="/iletisim">Contact</Link> {/* Updated text and href if needed */} 
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