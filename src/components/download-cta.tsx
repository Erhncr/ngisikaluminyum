import React from "react"
import { Button } from "@/components/ui/button"
import { SmartphoneIcon, StoreIcon } from "lucide-react"

export function DownloadCTA() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-primary/10" id="indir">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 rounded-2xl bg-background p-8 shadow-sm ring-1 ring-primary/10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">Hemen indir</p>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Bilsem hazırlığını bugün başlatın</h3>
            <p className="max-w-2xl text-muted-foreground">
              Ücretsiz deneme paketi, günlük hatırlatmalar ve veli paneliyle çocukların motivasyonunu düşürmeden adım adım ilerleyin.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-[180px]">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <StoreIcon className="h-5 w-5" /> App Store
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[180px]">
              <a href="https://play.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <SmartphoneIcon className="h-5 w-5" /> Google Play
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
