import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CompanyIntroduction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Hakkımızda</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              NG Işık Alüminyum: Güven ve Kalitenin Adresi
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Yılların tecrübesi ve uzman ekibimizle, sineklik sektöründe öncü çözümler sunuyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, yaşam alanlarınıza değer katıyoruz.
              Modern üretim tesislerimizde en kaliteli malzemeleri kullanarak, uzun ömürlü ve estetik ürünler tasarlıyoruz.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Link component should be used here later for navigation */}
              <Button size="lg">Daha Fazla Bilgi</Button>
            </div>
          </div>
          {/* Placeholder for Image - Replace with actual image */}
          <Image
            alt="Company Introduction"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg" // Replace with your actual image path e.g., /images/about-us.jpg
            width="550"
          />
        </div>
      </div>
    </section>
  )
} 