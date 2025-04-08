import React from "react"
import Image from "next/image"
import Link from "next/link"

// Placeholder data for client logos
const clients = [
  {
    id: 1,
    name: "Client Logo 1",
    logoUrl: "/placeholder.svg", // Replace with actual logo paths
    websiteUrl: "#", // Optional link to client website
  },
  {
    id: 2,
    name: "Client Logo 2",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#",
  },
  {
    id: 3,
    name: "Client Logo 3",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#",
  },
  {
    id: 4,
    name: "Client Logo 4",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#",
  },
   {
    id: 5,
    name: "Client Logo 5",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#",
  },
   {
    id: 6,
    name: "Client Logo 6",
    logoUrl: "/placeholder.svg",
    websiteUrl: "#",
  },
]

export function CustomerReferences() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-light"> {/* Light gray background */}
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Trusted by Leading Companies
        </h2>
        {/* Grid: Default 3 columns, 4 cols on sm+, 6 cols on md+ */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <Link
              key={client.id}
              href={client.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              aria-label={`Visit ${client.name} website`}
            >
              <Image
                alt={client.name}
                src={client.logoUrl}
                width={140} 
                height={70}
                className="max-h-[40px] sm:max-h-[50px] w-auto object-contain" // Slightly smaller height on mobile
              />
            </Link>
          ))}
        </div>
        {/* Optional: Add a section for testimonials/quotes here */}
      </div>
    </section>
  )
} 