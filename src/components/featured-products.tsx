import React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// Temporary product data
const products = [
  {
    id: 1,
    name: "Stor Pencere Sineklik",
    description: "Modern ve kullanışlı stor sineklik.",
    image: "/placeholder.svg",
    slug: "stor-pencere-sineklik" // Use slug instead of link
  },
  {
    id: 2,
    name: "Menteşeli Kapı Sineklik",
    description: "Klasik ve dayanıklı kapı sinekliği.",
    image: "/placeholder.svg",
    slug: "menteseli-kapi-sineklik" // Use slug instead of link
  },
  {
    id: 3,
    name: "Plise Pencere Sineklik",
    description: "Estetik ve katlanabilir pencere sinekliği.",
    image: "/placeholder.svg",
    slug: "plise-pencere-sineklik" // Use slug instead of link
  }
]

export function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Öne Çıkan Ürünlerimiz
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg">
              <CardHeader className="p-0"> {/* Added p-0 to remove padding */}
                {/* Link using product.slug */}
                <Link href={`/urunler/${product.slug}`}>
                    <Image
                        alt={product.name}
                        className="aspect-[4/3] w-full overflow-hidden rounded-t-lg object-cover hover:opacity-80 transition-opacity"
                        height={300}
                        src={product.image}
                        width={400}
                    />
                </Link>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <CardTitle>
                   {/* Link using product.slug */}
                   <Link href={`/urunler/${product.slug}`} className="hover:underline">
                     {product.name}
                   </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                {/* Button link using product.slug */}
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/urunler/${product.slug}`}>Detayları Gör</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 