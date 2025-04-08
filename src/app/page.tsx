import React from "react"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { CompanyIntroduction } from "@/components/company-introduction"
import { StatsSection } from "@/components/stats-section"
import { CustomerReferences } from "@/components/customer-references"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <StatsSection />
      <FeaturedProducts />
      <CompanyIntroduction />
      <CustomerReferences />
    </main>
  )
} 