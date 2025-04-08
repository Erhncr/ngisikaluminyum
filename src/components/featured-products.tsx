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
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

// Placeholder service data for the logistics theme
const services = [
  {
    id: 1,
    name: "Air Freight",
    description: "Fast and reliable air cargo solutions for time-sensitive shipments.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "air-freight",
  },
  {
    id: 2,
    name: "Ocean Freight",
    description: "Cost-effective and comprehensive sea freight services worldwide.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "ocean-freight",
  },
  {
    id: 3,
    name: "Road Freight",
    description: "Flexible and efficient land transportation across regions.",
    icon: ArrowRightIcon,
    image: "/placeholder.svg",
    slug: "road-freight",
  },
]

// Renaming function conceptually to ServicesShowcase
export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-light">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Our Services
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
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 