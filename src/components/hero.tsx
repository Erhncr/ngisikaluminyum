import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-36 bg-background" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Bilsem sınavı için tamamı mobil, akıllı hazırlık
            </h1>
            <p className="max-w-[640px] text-muted-foreground md:text-xl lg:mx-0 mx-auto">
              Yapay zeka destekli soru setleri, canlı deneme takvimi ve oyunlaştırılmış geri bildirimlerle çocuğunuzun Bilsem
              sınavına güvenle hazırlanmasını sağlayın.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#indir">Uygulamayı indir</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#ozellikler">Demo dersi izle</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Bilsem sınavına hazırlık yapan çocuk"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full max-w-2xl"
              height="450"
              src="/placeholder.svg"
              width="800"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 