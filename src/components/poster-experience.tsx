"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import {
  CalendarDays,
  Clock,
  Flag,
  Footprints,
  MapPin,
  NotebookPen,
  PartyPopper,
  Sparkles,
  Users2,
} from "lucide-react"

type Game = {
  id: string
  name: string
  description: string
  highlight: string
  strategy: string
  funFact: string
  icon: LucideIcon
  accent: string
}

const games: Game[] = [
  {
    id: "mendil",
    name: "Mendil Kapmaca",
    description:
      "Reflekslerinizi konuşturacağınız bu oyunda iki takım karşılıklı dizilir ve hakemin mendili düşürmesiyle yarış başlar.",
    highlight: "Bir anda hızlanmak ve mendile ulaşmak için doğru açıyı yakalamak çok önemli!",
    strategy: "Takım arkadaşını gözlemleyip ne zaman harekete geçmesi gerektiğini fısıldamak oyunun kaderini değiştirebilir.",
    funFact: "Denge ve reaksiyon süresini geliştiren Mendil Kapmaca, geleneksel çocuk oyunlarının enerjisini sahaya taşır.",
    icon: Flag,
    accent: "from-amber-200 via-orange-200 to-amber-300",
  },
  {
    id: "yakar",
    name: "Yakar Top",
    description:
      "Çeviklik, takım uyumu ve hızlı karar verme isteyen Yakar Top'ta her atış yeni bir strateji demek.",
    highlight: "Daire içinde adımlarını iyi ayarlamak ve atışı son ana saklamak büyük avantaj sağlar.",
    strategy: "Rakiplerin zayıf noktasını bulmak ve takım arkadaşını koruyacak açıyla paslaşmak skor getirir.",
    funFact: "Isınma hareketleri ve doğru nefes tekniği ile uzun süre oyunda kalmak çok daha kolay.",
    icon: PartyPopper,
    accent: "from-rose-200 via-pink-200 to-orange-200",
  },
  {
    id: "kuyruk",
    name: "Kuyruk Kapmaca",
    description:
      "Sürekli hareket halindesiniz! Takımınızın kuyruğunu korurken aynı anda rakibin kuyruğunu yakalamaya çalışın.",
    highlight: "Dairesel hareketlerle rakibin sizi yakalamasını zorlaştırabilir ve açıyı kendi lehinize çevirebilirsiniz.",
    strategy: "Takım içi kısa komutlar belirlemek ve birbirini kollamak oyunun kilidini açar.",
    funFact: "Kuyruk Kapmaca sayesinde koordinasyon ve çeviklik gelişir, takım ruhu güçlenir.",
    icon: Footprints,
    accent: "from-emerald-200 via-teal-200 to-sky-200",
  },
  {
    id: "cuval",
    name: "Çuval Yarışı",
    description:
      "Dengenizi kaybetmeden hedefe zıplayarak ulaşmanız gereken eğlenceli ve bol kahkahalı bir yarış.",
    highlight: "Zıplarken dizlerinizi çekmek ve ritmi bozmamak sizi öne taşır.",
    strategy: "Başlangıçta sabırlı olmak, ortada hızlanmak ve finişte son bir hamle yapmak galibiyeti getirir.",
    funFact: "Çuval Yarışı sırasında kahkahalar yükselirken aynı zamanda bacak ve merkez kaslarınız da güçlenir.",
    icon: Sparkles,
    accent: "from-sky-200 via-indigo-200 to-violet-200",
  },
  {
    id: "mangala",
    name: "Mangala",
    description:
      "Asırlık strateji oyunu Mangala, akıl yürütme becerinizi ve sabrınızı test eder.",
    highlight: "Hamleleri önceden planlamak ve taş dağılımını iyi gözlemlemek kritik öneme sahiptir.",
    strategy: "Rakibin hamlelerini tahmin edip boş kuyuları kontrol altına almak sizi bir adım öne çıkarır.",
    funFact: "Mangala, Türk kültüründe köklü bir geçmişe sahip ve dikkat toplamaya yardımcı olur.",
    icon: Clock,
    accent: "from-lime-200 via-yellow-200 to-amber-200",
  },
]

const detailCards = [
  {
    id: "date",
    label: "Şenlik Tarihi",
    value: "6 Ekim • 10.00",
    icon: CalendarDays,
    badge: "Tek Gün",
    background: "bg-orange-50/80",
  },
  {
    id: "apply",
    label: "Başvuru Aralığı",
    value: "22 - 30 Eylül",
    icon: NotebookPen,
    badge: "Son Hafta",
    background: "bg-sky-50/80",
  },
  {
    id: "location",
    label: "Yer",
    value: "Adnan Menderes Ortaokulu Bahçesi",
    icon: MapPin,
    badge: "Açık Alan",
    background: "bg-lime-50/80",
  },
  {
    id: "audience",
    label: "Katılım",
    value: "Tüm sınıflar + veliler",
    icon: Users2,
    badge: "Takım Ruhu",
    background: "bg-rose-50/80",
  },
]

function getDaysUntilEvent(eventDate: Date) {
  const now = new Date()
  const diff = eventDate.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

  if (days > 0) {
    return `Şenlik için heyecanlı geri sayım: ${days} gün kaldı!`
  }

  if (days === 0) {
    return "Şenlik bugün başlıyor! Hazırlanın, oyun zamanı geldi!"
  }

  return "Şenlik tamamlandı. Gelecek yıl tekrar buluşmak için şimdiden hazırlanın!"
}

function getApplicationProgress(start: Date, end: Date) {
  const now = new Date()
  const total = end.getTime() - start.getTime()
  const elapsed = now.getTime() - start.getTime()

  if (now < start) {
    return { progress: 0, label: "Başvurular henüz başlamadı" }
  }

  if (now > end) {
    return { progress: 1, label: "Başvurular sona erdi" }
  }

  return {
    progress: total > 0 ? Math.min(1, Math.max(0, elapsed / total)) : 0,
    label: "Başvurular devam ediyor",
  }
}

export function PosterExperience() {
  const [selectedGame, setSelectedGame] = useState<Game>(games[0])

  const eventDate = useMemo(() => new Date("2025-10-06T09:30:00+03:00"), [])
  const applicationPeriod = useMemo(
    () => ({
      start: new Date("2025-09-22T00:00:00+03:00"),
      end: new Date("2025-09-30T23:59:59+03:00"),
    }),
    [],
  )

  const countdownText = getDaysUntilEvent(eventDate)
  const { progress, label } = getApplicationProgress(applicationPeriod.start, applicationPeriod.end)
  const progressPercent = Math.round(progress * 100)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFEFD6] via-white to-[#DFF3FF] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 left-10 h-40 w-40 rounded-full bg-rose-200/40 blur-2xl"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] xl:gap-16">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 shadow-sm">
                Adnan Menderes Ortaokulu
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                Geleneksel Çocuk Oyunları Şenliği
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Renkli istasyonlarla hazırlanan okul bahçemizde Mendil Kapmaca’dan Mangala’ya kadar uzanan dolu dolu bir oyun
                programı sizi bekliyor. Koş, zıpla, strateji kur ve takım ruhunu sahaya yansıt!
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detailCards.map((card) => {
                const Icon = card.icon

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                      "relative overflow-hidden rounded-3xl border border-orange-100/50 p-5 shadow-sm backdrop-blur",
                      card.background,
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-orange-500 shadow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">{card.label}</p>
                        <p className="text-lg font-semibold text-slate-800">{card.value}</p>
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-orange-500 shadow-sm">
                      {card.badge}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl border border-orange-200/80 bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3 text-orange-600">
                <Sparkles className="h-6 w-6" />
                <p className="text-lg font-semibold">{countdownText}</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Sabah 10.00’da başlayacak şenliğimizde oyun istasyonları, enerji noktaları ve sürpriz yarışmalar hazır olacak.
              </p>
            </motion.div>

            <div className="rounded-3xl border border-sky-100/70 bg-white/80 p-6 shadow-lg backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-800">Oyun İstasyonları</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Favori oyununuzu seçin, detayları inceleyin ve takımınızla strateji belirleyin.
                  </p>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
                  Aktif Seçim
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {games.map((game) => {
                  const Icon = game.icon
                  const isActive = selectedGame.id === game.id

                  return (
                    <motion.button
                      key={game.id}
                      type="button"
                      onClick={() => setSelectedGame(game)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border-2 border-transparent bg-white/70 p-4 text-left transition-all",
                        "shadow-sm backdrop-blur hover:shadow-lg",
                        isActive ? "border-orange-400 shadow-xl" : "border-orange-100",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100",
                          "bg-gradient-to-br",
                          `${isActive ? game.accent : "from-white via-white to-white"}`,
                        )}
                      />
                      <div className="relative flex items-start gap-3">
                        <span
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-orange-500 shadow",
                            isActive && "bg-orange-500 text-white",
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-slate-800">{game.name}</p>
                          <p className="text-xs text-slate-600">{game.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGame.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-6 rounded-3xl border border-orange-200/70 bg-white/90 p-6 shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-orange-600">{selectedGame.name}</h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
                      Takım Oyunu
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{selectedGame.description}</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-orange-50/80 p-4 text-sm text-slate-600 shadow">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">Altın İpucu</p>
                      <p className="mt-2 leading-relaxed">{selectedGame.highlight}</p>
                    </div>
                    <div className="rounded-2xl bg-sky-50/80 p-4 text-sm text-slate-600 shadow">
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">Strateji</p>
                      <p className="mt-2 leading-relaxed">{selectedGame.strategy}</p>
                    </div>
                    <div className="rounded-2xl bg-lime-50/80 p-4 text-sm text-slate-600 shadow">
                      <p className="text-xs font-semibold uppercase tracking-wide text-lime-600">Neden Seviliyor?</p>
                      <p className="mt-2 leading-relaxed">{selectedGame.funFact}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-sky-100/70 bg-white/90 p-6 shadow-lg backdrop-blur"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Başvuru Takvimi</h2>
                  <p className="text-sm text-slate-500">22 - 30 Eylül tarihleri arasında beden eğitimi öğretmenlerimize müracaat edin.</p>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
                  {label}
                </span>
              </div>
              <div className="mt-6">
                <div className="relative h-2 rounded-full bg-sky-100">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-400 to-sky-600"
                    style={{ width: `${progressPercent}%` }}
                    initial={false}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute top-1/2 h-6 w-6 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-sky-500 shadow"
                    style={{ left: `${progressPercent}%` }}
                    initial={false}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
                <div className="mt-4 flex justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <span>22 Eylül</span>
                  <span>30 Eylül</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button asChild className="bg-orange-500 text-white hover:bg-orange-500/90">
                  <Link href="/iletisim">Takımınızı Kaydedin</Link>
                </Button>
                <p className="text-sm font-medium text-slate-600">
                  Müracaat: <span className="font-semibold text-orange-600">Beden Eğitimi Öğretmenleri</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-[36px] border border-orange-100/70 bg-white/80 p-6 shadow-2xl backdrop-blur-lg"
            >
              <motion.div
                aria-hidden
                className="absolute -top-10 right-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-300/50 via-pink-200/40 to-yellow-200/50 blur-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-8 left-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-300/40 via-cyan-200/40 to-lime-200/40 blur-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
              />

              <div className="relative space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-3xl bg-orange-100 shadow">
                    <Image
                      src="/1b000a8b-3405-4abc-ad3b-e7baf9a427aa.png"
                      alt="Şenlikte mendil kapmaca oynayan öğrenciler"
                      width={480}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-rows-2 gap-4">
                    <div className="overflow-hidden rounded-3xl bg-sky-100 shadow">
                      <Image
                        src="/1b000a8b-3405-4aaaabc-ad3b-e7baf9a427aa.png"
                        alt="Çocuk oyunları şenliğinden renkli anlar"
                        width={240}
                        height={170}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-orange-200 via-yellow-200 to-emerald-100 p-4 text-center text-sm font-semibold text-slate-700 shadow">
                      Enerji dolu istasyonlar, takım çalışması ve bol kahkaha!
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-orange-100/70 bg-white/90 p-5 shadow-lg">
                  <div className="flex items-center gap-3">
                    <PartyPopper className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="text-lg font-semibold text-slate-800">Şenlik Programı</p>
                      <p className="text-sm text-slate-500">Oyun rotasyonları, takım anonsları ve ödüllerle dolu akış.</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
                      09.30 - 10.00 | Renkli ısınma parkurları ve takım kurdelesi dağıtımı
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                      10.00 - 12.00 | Oyun istasyonları: Mendil Kapmaca, Yakar Top, Kuyruk Kapmaca, Çuval Yarışı, Mangala
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime-400" />
                      12.00 - 12.30 | Ara, sürpriz yarışmalar ve velilerle ortak oyunlar
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                      12.30 - 13.00 | Ödül töreni ve hatıra fotoğrafı alanı
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white/90 via-orange-50/80 to-sky-50/80 p-6 shadow-lg">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">Enerji Alanı</p>
                      <p className="mt-1 text-lg font-semibold text-slate-800">Vitamin barı, su istasyonları ve gölgelik dinlenme köşeleri hazır.</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Renkli yüz boyama masaları ve ritim atölyesi ile şenliğe misafir aileler de dahil olacak.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                      <Link href="/iletisim">Gönüllü Ol</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
