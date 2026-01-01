import React from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Mantık & problem çözme",
    description: "Çocuk psikologları tarafından hazırlanmış, algoritma ve akıl yürütme odaklı soru setleri.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "mantik-problem",
  },
  {
    id: 2,
    name: "Görsel algı & dikkat",
    description: "Çoklu zekâ teorisine uygun görsel hafıza çalışmaları ve odaklanma oyunları.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "gorsel-algi",
  },
  {
    id: 3,
    name: "Deneme takibi",
    description: "Seviye bazlı Bilsem denemeleri, anında koçluk notları ve haftalık gelişim grafikleri.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "deneme-takibi",
  },
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-light" id="ozellikler">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Hazırlık modülleri
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl flex flex-col"
            >
              <CardHeader className="p-0">
                <Link href={`/services/${service.slug}`} aria-label={service.name}>
                    <Image
                      alt={service.name}
                      className="aspect-[16/9] w-full object-cover"
                      height={225}
                      src={service.image}
                      width={400}
                    />
                 </Link>
              </CardHeader>
              <CardContent className="p-4 space-y-1 flex-grow">
                <CardTitle>
                  <Link href={`/services/${service.slug}`} className="hover:underline">
                    {service.name}
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/services/${service.slug}`}>Detayları gör</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 