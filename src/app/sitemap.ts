import { MetadataRoute } from 'next'

// Temporary product slugs - replace with actual data fetching from CMS/DB
const allProductSlugs = [
    "stor-pencere-sineklik",
    "menteseli-kapi-sineklik",
    "plise-pencere-sineklik",
    "sabit-pencere-sineklik",
    "surme-kapi-sineklik",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ngisikaluminyum.com' // Replace with your actual domain

  // Static pages
  const staticPages = [
    '/',
    '/urunler',
    '/hakkimizda',
    '/iletisim',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // Use a relevant date
    // changeFrequency: 'weekly', // Optional
    // priority: route === '/' ? 1 : 0.8, // Optional
  }))

  // Dynamic product pages
  const productPages = allProductSlugs.map((slug) => ({
    url: `${baseUrl}/urunler/${slug}`,
    lastModified: new Date(), // Use product update date if available
    // changeFrequency: 'monthly',
    // priority: 0.6,
  }))

  return [
    ...staticPages,
    ...productPages,
  ]
} 