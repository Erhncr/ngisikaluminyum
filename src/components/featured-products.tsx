import React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Temporary product data - replace with actual data fetching later
const products = [
  {
    id: 1,
    name: "Stor Pencere Sineklik",
    description: "Modern ve kullanışlı stor sineklik.",
    image: "/placeholder.svg", // Replace with actual image
    link: "/urunler/stor-pencere"
  },
  {
    id: 2,
    name: "Menteşeli Kapı Sineklik",
    description: "Klasik ve dayanıklı kapı sinekliği.",
    image: "/placeholder.svg", // Replace with actual image
    link: "/urunler/menteseli-kapi"
  },
  {
    id: 3,
    name: "Plise Pencere Sineklik",
    description: "Estetik ve katlanabilir pencere sinekliği.",
    image: "/placeholder.svg", // Replace with actual image
    link: "/urunler/plise-pencere"
  }
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12">
          Öne Çıkan Ürünlerimiz
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image
                  alt={product.name}
                  className="aspect-[4/3] w-full overflow-hidden rounded-t-lg object-cover"
                  height={300}
                  src={product.image}
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <CardTitle>{product.name}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                {/* Link component should be used here later for navigation */}
                <Button variant="outline" className="w-full">Detayları Gör</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 