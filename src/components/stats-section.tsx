import React from "react"
import { BrainIcon, ClockIcon, SparklesIcon, StarIcon } from "lucide-react"

interface StatItem {
  id: number
  value: string
  label: string
  icon?: React.ElementType // Optional icon component
}

const stats: StatItem[] = [
  {
    id: 1,
    value: "40k+",
    label: "Çözülebilir soru ve etkinlik",
    icon: BrainIcon,
  },
  {
    id: 2,
    value: "12",
    label: "Canlı deneme seti ve seviye belirleme",
    icon: SparklesIcon,
  },
  {
    id: 3,
    value: "92%",
    label: "Ebeveyn memnuniyeti",
    icon: StarIcon,
  },
  {
    id: 4,
    value: "7/24",
    label: "Yapay zeka koçundan anlık geri bildirim",
    icon: ClockIcon,
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="istatistikler">
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
