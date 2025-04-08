import React from "react"
import Image from "next/image" // Import Next.js Image component
import { Button } from "@/components/ui/button" // Import Button from shadcn/ui
import Link from 'next/link' // Import Link for buttons

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Sineklik <br /> Çözümleri
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              NG Işık Alüminyum olarak, evinize ve iş yerinize özel, kaliteli ve estetik sineklik sistemleri sunuyoruz.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                 <Link href="/urunler">Ürünleri Keşfet</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                 <Link href="/hakkimizda">Hakkımızda</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <Image
              alt="Sineklik Çözümleri"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
              height="400"
              src="/placeholder.svg" // Replace with a relevant main image
              width="700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 