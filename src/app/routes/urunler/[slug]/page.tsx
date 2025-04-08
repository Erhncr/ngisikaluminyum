import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation' // Import notFound for handling missing products

// --- Temporary Data Fetching Simulation ---
// In a real app, fetch this data from your CMS or DB
const allProducts = [
  {
    id: 1,
    name: "Stor Pencere Sineklik",
    description: "Modern ve kullanışlı stor sineklik. Kolay kullanımı ve şık görünümü ile pencerelerinize değer katar. Farklı renk seçenekleri mevcuttur.",
    longDescription: "Stor sineklikler, dikey olarak yukarı doğru toplanarak minimum yer kaplar. Kullanılmadığı zamanlarda kaset içinde korunur, bu da ömrünü uzatır. Alüminyum profilleri ve dayanıklı tülü ile uzun yıllar sorunsuz kullanım sunar.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], // Placeholder gallery images
    specs: [
      { key: "Malzeme", value: "Alüminyum Profil, Fiberglas Tül" },
      { key: "Renk Seçenekleri", value: "Beyaz, Antrasit, Ahşap Desen" },
      { key: "Montaj Tipi", value: "Pencere Kasası İçi/Dışı" },
    ],
    installation: "Detaylı montaj kılavuzu ürünle birlikte gönderilir. İsteğe bağlı olarak profesyonel montaj hizmetimiz mevcuttur.",
    slug: "stor-pencere-sineklik"
  },
  {
    id: 2,
    name: "Menteşeli Kapı Sineklik",
    description: "Klasik ve dayanıklı kapı sinekliği. Sık kullanılan kapılar için idealdir.",
    longDescription: "Menteşeli sineklikler, bir kapı gibi açılıp kapanır. Güçlü alüminyum çerçevesi ve yırtılmaya dayanıklı tülü sayesinde güvenilir koruma sağlar. Kolayca takılıp çıkarılabilir.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"],
    specs: [
      { key: "Malzeme", value: "Alüminyum Profil, Fiberglas/Pet Tül" },
      { key: "Kilit Sistemi", value: "Mıknatıslı veya Çıtçıtlı" },
      { key: "Açılış Yönü", value: "İçe/Dışa Açılır" },
    ],
    installation: "Standart kapı kasalarına kolayca monte edilebilir. Montaj vidaları ve talimatları pakete dahildir.",
    slug: "menteseli-kapi-sineklik"
  },
  {
    id: 3,
    name: "Plise Pencere Sineklik",
    description: "Estetik ve katlanabilir pencere sinekliği. Dar alanlar için uygundur.",
    longDescription: "Plise sineklikler, akordeon gibi katlanarak açılıp kapanır. Modern görünümü ve pratik kullanımı ile öne çıkar. Hem yatay hem de dikey olarak uygulanabilir.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specs: [
      { key: "Malzeme", value: "Alüminyum Profil, Polyester Tül" },
      { key: "Profil Kalınlığı", value: "20mm / 40mm" },
      { key: "Maksimum Genişlik", value: "400cm" },
    ],
    installation: "Pencere veya kapı kasasına monte edilir. Kurulumu basittir, detaylı kılavuz mevcuttur.",
    slug: "plise-pencere-sineklik"
  },
  {
    id: 4,
    name: "Sabit Pencere Sineklik",
    description: "Ekonomik ve pratik sabit çerçeve sineklik. Az açılan pencereler için ideal.",
    longDescription: "Sabit çerçeveli sineklikler, pencereye monte edilir ve çıkarılmaz. Özellikle havalandırma amaçlı kullanılan veya sık açılmayan pencereler için uygun maliyetli bir çözümdür.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg"],
    specs: [
      { key: "Malzeme", value: "Alüminyum Profil, Fiberglas Tül" },
      { key: "Profil Tipi", value: "İnce / Kalın" },
      { key: "Montaj", value: "Vidalı veya Klipsli" },
    ],
    installation: "Pencere ölçüsüne göre özel üretilir ve kolayca yerine takılır.",
    slug: "sabit-pencere-sineklik"
  },
  {
    id: 5,
    name: "Sürme Kapı Sineklik",
    description: "Balkon ve teras kapıları için ideal sürme sistem. Kullanışlı ve yer kaplamaz.",
    longDescription: "Sürme sineklikler, mevcut sürme kapı veya pencere sistemine paralel olarak çalışır. Tek veya çift raylı sistemler mevcuttur. Geniş açıklıklar için uygundur.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"],
    specs: [
      { key: "Malzeme", value: "Alüminyum Profil, Fiberglas Tül" },
      { key: "Ray Sayısı", value: "Tek / Çift" },
      { key: "Tekerlek Sistemi", value: "Rulmanlı Tekerlekler" },
    ],
    installation: "Mevcut doğramaya uygun ray sistemi ile monte edilir. Profesyonel montaj önerilir.",
    slug: "surme-kapi-sineklik"
  },
]

// Function to get product data by slug (replace with actual data fetching logic)
async function getProductBySlug(slug: string) {
  // Simulate network delay
  // await new Promise(resolve => setTimeout(resolve, 50));
  const product = allProducts.find((p) => p.slug === slug)
  return product
}
// --- End Temporary Data Fetching Simulation ---

// Generate metadata dynamically based on the product
// export async function generateMetadata({ params }: { params: { slug: string } }) {
// Temporarily disable generateMetadata or fix its type if needed
// ...
// }

// Temporarily use 'any' for props to bypass type error
export default async function ProductDetailPage({ params }: any) {
  const product = await getProductBySlug(params.slug)

  // If product not found based on slug, show 404 page
  if (!product) {
    notFound()
  }

  // --- Define Product Schema --- 
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image, // Use the main product image URL
    "description": product.description,
    "brand": {
        "@type": "Brand",
        "name": "NG Işık Alüminyum"
    },
    // Optional: Add SKU, offers (price), aggregateRating, review if available
    // "sku": product.sku,
    // "offers": {
    //   "@type": "Offer",
    //   "url": `${process.env.NEXT_PUBLIC_BASE_URL}/urunler/${product.slug}`, // URL of the product page
    //   "priceCurrency": "TRY",
    //   "price": "100.00", // Replace with actual price
    //   "itemCondition": "https://schema.org/NewCondition",
    //   "availability": "https://schema.org/InStock"
    // },
    // "aggregateRating": {
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.5",
    //   "reviewCount": "15"
    // },
  };
  // --- End Product Schema Definition ---

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      {/* Add Product Schema script */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Gallery (Basic Implementation) */}
        <div>
          <Image
            alt={product.name}
            className="aspect-square w-full rounded-lg border object-cover mb-4"
            height={600}
            src={product.image} // Main image
            width={600}
          />
          {/* Simple gallery display - Enhance later */}
          <div className="grid grid-cols-4 gap-2">
            {product.gallery.map((imgSrc, index) => (
              <button
                key={index}
                className="border rounded-lg overflow-hidden focus:ring-2 ring-primary focus:outline-none"
                // Add aria-label for accessibility
                aria-label={`${product.name} - Galeri Resmi ${index + 1} Görüntüle`}
                // TODO: Add onClick handler to change the main image
              >
                <Image
                    alt={`${product.name} - Galeri ${index + 1}`} // Alt text is already good
                    className="aspect-square object-cover"
                    height={100}
                    src={imgSrc}
                    width={100}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {product.longDescription}
          </p>

          {/* Specifications */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Teknik Özellikler</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              {product.specs.map((spec) => (
                <li key={spec.key}>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{spec.key}:</span> {spec.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Installation */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Montaj Bilgileri</h3>
            <p className="text-gray-600 dark:text-gray-400">
                {product.installation}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg">Hemen Teklif Al</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products Section (Placeholder) */}
      {/* <div className="mt-16 lg:mt-24"> */}
      {/*   <h2 className="text-2xl font-bold mb-6">İlgili Ürünler</h2> */}
      {/*   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
      {/*     Add related product cards here */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  )
} 