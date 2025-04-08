import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Temporary product data - replace with actual data source and fetching
const allProducts = [
  {
    id: 1,
    name: "Stor Pencere Sineklik",
    description: "Modern ve kullanışlı stor sineklik.",
    image: "/placeholder.svg", // Replace with actual image
    slug: "stor-pencere-sineklik",
    type: "window"
  },
  {
    id: 2,
    name: "Menteşeli Kapı Sineklik",
    description: "Klasik ve dayanıklı kapı sinekliği.",
    image: "/placeholder.svg", // Replace with actual image
    slug: "menteseli-kapi-sineklik",
    type: "door"
  },
  {
    id: 3,
    name: "Plise Pencere Sineklik",
    description: "Estetik ve katlanabilir pencere sinekliği.",
    image: "/placeholder.svg", // Replace with actual image
    slug: "plise-pencere-sineklik",
    type: "window"
  },
  {
    id: 4,
    name: "Sabit Pencere Sineklik",
    description: "Ekonomik ve pratik sabit çerçeve sineklik.",
    image: "/placeholder.svg", // Replace with actual image
    slug: "sabit-pencere-sineklik",
    type: "window"
  },
  {
    id: 5,
    name: "Sürme Kapı Sineklik",
    description: "Balkon ve teras kapıları için ideal sürme sistem.",
    image: "/placeholder.svg", // Replace with actual image
    slug: "surme-kapi-sineklik",
    type: "door"
  },
  // Add more products as needed
]

export default function ProductsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12">
        Ürünlerimiz
      </h1>

      {/* Placeholder for Filtering Options - To be implemented later */}
      {/* <div className="mb-8 flex justify-center space-x-4"> */}
      {/*   <Button variant="outline">Tümü</Button> */}
      {/*   <Button variant="ghost">Pencere</Button> */}
      {/*   <Button variant="ghost">Kapı</Button> */}
      {/* </div> */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg"
          >
            <CardHeader className="p-0">
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
                <Link href={`/urunler/${product.slug}`} className="hover:underline">
                 {product.name}
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/urunler/${product.slug}`}>Detayları Gör</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 