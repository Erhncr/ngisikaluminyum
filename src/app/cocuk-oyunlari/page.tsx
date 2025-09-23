import type { Metadata } from "next"
import { PosterExperience } from "@/components/poster-experience"

export const metadata: Metadata = {
  title: "Çocuk Oyunları Şenliği | Adnan Menderes Ortaokulu",
  description:
    "Geleneksel Mendil Kapmaca, Yakar Top, Çuval Yarışı ve Mangala istasyonlarıyla 6 Ekim'de düzenlenen Çocuk Oyunları Şenliği'ni keşfedin.",
}

export default function CocukOyunlariPage() {
  return <PosterExperience />
}
