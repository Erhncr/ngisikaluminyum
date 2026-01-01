import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CompanyIntroduction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="yontem">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Bilsem müfredatına göre kanıtlanmış yöntem
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              3 farklı zeka alanını hedefleyen dijital içerikler, gerçek sınav deneyimine yakın denemeler ve yapay zeka koçu ile
              kişiselleştirilmiş çalışma planları.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild variant="outline" size="lg">
                <Link href="#indir">Programı gör</Link>
              </Button>
            </div>
          </div>
          <Image
            alt="Bilsem hazırlık uygulaması ekranları"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
            height="350"
            src="/placeholder.svg"
            width="600"
          />
        </div>
      </div>
    </section>
  )
} 