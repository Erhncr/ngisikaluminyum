import React from "react"
import Image from "next/image" // Import Next.js Image component
import { Button } from "@/components/ui/button" // Import Button from shadcn/ui

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Placeholder for Image - Replace with actual image */}
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg" // Replace with your actual image path e.g., /images/hero-image.jpg
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
                NG Işık Alüminyum ile Kaliteyi Keşfedin
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                Pencere ve kapılarınız için modern, dayanıklı ve estetik sineklik çözümleri sunuyoruz. Evinizi ve iş yerinizi haşerelerden korurken konforunuzu artırın.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Ürünleri İncele</Button>
              <Button variant="outline" size="lg">
                Teklif Al
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 