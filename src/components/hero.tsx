import React from "react"
import Image from "next/image" // Import Next.js Image component
import { Button } from "@/components/ui/button" // Import Button from shadcn/ui
import Link from 'next/link' // Import Link for buttons

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-36 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable Global Logistics Solutions
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl lg:mx-0 mx-auto">
              Streamlining your supply chain with efficient, trustworthy, and innovative freight forwarding services worldwide.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                 <Link href="/iletisim">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                 <Link href="/company">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Global Logistics Network"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full max-w-2xl"
              height="450"
              src="/placeholder.svg" // Replace with a relevant main image
              width="800"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 