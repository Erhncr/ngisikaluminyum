import React from "react"
import { TruckIcon, GlobeIcon, UsersIcon, SmileIcon } from "lucide-react" // Example icons

interface StatItem {
  id: number
  value: string
  label: string
  icon?: React.ElementType // Optional icon component
}

// Placeholder data for stats
const stats: StatItem[] = [
  {
    id: 1,
    value: "1.2M+",
    label: "Kilometers Covered Annually",
    icon: TruckIcon,
  },
  {
    id: 2,
    value: "98%",
    label: "On-Time Delivery Rate",
    icon: GlobeIcon,
  },
  {
    id: 3,
    value: "15k+",
    label: "Satisfied Customers",
    icon: SmileIcon, // Changed from UsersIcon for variety
  },
  {
    id: 4,
    value: "250+",
    label: "Global Partners",
    icon: UsersIcon, // Re-added UsersIcon
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Optional Section Title */}
        {/* <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Numbers That Speak Volumes
        </h2> */}
        {/* Grid: Default 1 column, 2 cols on sm+, 4 cols on md+ */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {stat.icon && (
                <stat.icon className="h-10 w-10 mb-3 text-primary" />
              )}
              <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
