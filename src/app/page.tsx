import React from "react"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { CompanyIntroduction } from "@/components/company-introduction"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <FeaturedProducts />
      <CompanyIntroduction />
    </main>
  )
} 