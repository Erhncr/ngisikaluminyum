import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

const navLinks = [
  { href: "#hero", label: "Ana sayfa" },
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#istatistikler", label: "Sonuçlar" },
  { href: "#yontem", label: "Yöntem" },
  { href: "#yorumlar", label: "Yorumlar" },
]

export function Header() {
  return (
    // Sticky header with background color based on theme (white/black)
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/ngisiklogo.png"
            alt="Parlak Zeka"
            width={100}
            height={40}
            className="h-8 w-auto"
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

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#indir">Ücretsiz dene</Link>
          </Button>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  <Link href="/" className="mb-4 flex items-center space-x-2">
                    <Image
                        src="/ngisiklogo.png"
                        alt="Parlak Zeka"
                        width={80}
                        height={32}
                        className="h-8 w-auto"
                    />
                  </Link>

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

                   <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                     <Link href="#indir">Ücretsiz dene</Link>
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