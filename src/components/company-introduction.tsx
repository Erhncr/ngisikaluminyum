import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function CompanyIntroduction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              NG Işık Alüminyum: Güven ve Kalitenin Adresi
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Yılların tecrübesi ve uzman ekibimizle, sineklik sektöründe öncü çözümler sunuyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, yaşam alanlarınıza değer katıyoruz.
              Modern üretim tesislerimizde en kaliteli malzemeleri kullanarak, uzun ömürlü ve estetik ürünler tasarlıyoruz.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="outline" size="lg">
                <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
              </Button>
            </div>
          </div>
          <Image
            alt="NG Işık Alüminyum Hakkında"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
} 