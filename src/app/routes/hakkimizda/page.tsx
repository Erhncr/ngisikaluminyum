import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BuildingIcon, TargetIcon, UsersIcon, ShieldCheckIcon, AwardIcon } from 'lucide-react' // Relevant icons

// Metadata for the page
export const metadata = {
  title: "Hakkımızda - NG Işık Alüminyum",
  description: "NG Işık Alüminyum'un hikayesini, misyonunu, vizyonunu ve değerlerini keşfedin. Kalite ve güvene dayalı hizmet anlayışımız hakkında bilgi edinin.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      {/* Page Header */}
      <div className="mb-12 lg:mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hakkımızda
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          NG Işık Alüminyum olarak sineklik sektöründeki yolculuğumuz ve değerlerimiz.
        </p>
      </div>

      <div className="space-y-16">
        {/* Section 1: Company History */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <div className="flex items-center space-x-2 text-primary">
                <BuildingIcon className="h-6 w-6" />
                <h2 className="text-3xl font-semibold tracking-tight">Hikayemiz</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              NG Işık Alüminyum, [Kuruluş Yılı] yılında Bursa'da sineklik çözümleri sunma amacıyla kurulmuştur. Başlangıçta küçük bir atölye olarak başlayan yolculuğumuz, kaliteye verdiğimiz önem ve müşteri memnuniyeti odaklı yaklaşımımız sayesinde hızla büyüdü.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Bugün, modern üretim tesislerimiz ve deneyimli ekibimizle, Türkiye'nin dört bir yanına estetik, dayanıklı ve fonksiyonel sineklik sistemleri sunmaktan gurur duyuyoruz. Sürekli gelişimi hedefleyerek sektördeki yenilikleri takip ediyor ve ürün yelpazemizi genişletiyoruz.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              alt="Şirket Tarihi Görseli"
              className="rounded-lg shadow-md aspect-video object-cover"
              height={400}
              src="/placeholder.svg" // Replace with relevant image
              width={600}
            />
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
           <div>
             <Image
               alt="Misyon Vizyon Görseli"
               className="rounded-lg shadow-md aspect-video object-cover"
               height={400}
               src="/placeholder.svg" // Replace with relevant image
               width={600}
             />
           </div>
           <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary">
                    <TargetIcon className="h-6 w-6" />
                    <h3 className="text-2xl font-semibold">Misyonumuz</h3>
                </div>
                 <p className="text-gray-600 dark:text-gray-400">
                   Müşterilerimize en yüksek kalitede, estetik ve fonksiyonel sineklik çözümleri sunarak yaşam alanlarının konforunu ve güvenliğini artırmak.
                 </p>
              </div>
             <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary">
                    <TargetIcon className="h-6 w-6 rotate-90" /> {/* Rotated for visual difference */}
                    <h3 className="text-2xl font-semibold">Vizyonumuz</h3>
                </div>
                 <p className="text-gray-600 dark:text-gray-400">
                   Sineklik sektöründe yenilikçi yaklaşımımız, sürdürülebilir üretim anlayışımız ve müşteri odaklı hizmetimizle Türkiye'nin lider markası olmak.
                 </p>
             </div>
           </div>
        </section>

        {/* Section 3: Team (Placeholder) */}
        <section className="text-center">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <UsersIcon className="h-7 w-7" />
              <h2 className="text-3xl font-semibold tracking-tight">Ekibimiz</h2>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            Alanında uzman, deneyimli ve dinamik bir ekiple çalışıyoruz. Her zaman en iyi hizmeti sunmak için buradayız.
          </p>
          {/* Placeholder for team member cards/photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map(i => (
                 <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                     <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-2 flex items-center justify-center">
                        <UsersIcon className="h-10 w-10 text-gray-500" />
                     </div>
                     <h4 className="font-semibold">Ekip Üyesi {i}</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400">Pozisyon</p>
                 </div>
             ))}
          </div>
        </section>

        {/* Section 4: Quality Assurance & Certifications (Placeholder) */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                  <ShieldCheckIcon className="h-6 w-6" />
                  <h2 className="text-3xl font-semibold tracking-tight">Kalite Politikamız</h2>
              </div>
             <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
               NG Işık Alüminyum olarak, üretim süreçlerimizin her aşamasında en yüksek kalite standartlarına bağlı kalıyoruz. Kullanılan malzemelerin seçiminden montaj detaylarına kadar titiz bir kontrol mekanizması uyguluyoruz. Müşterilerimize sadece estetik değil, aynı zamanda uzun ömürlü ve güvenilir ürünler sunmayı temel prensip edindik.
             </p>
             <div className="flex items-center space-x-2 text-primary pt-4">
                 <AwardIcon className="h-6 w-6" />
                 <h3 className="text-2xl font-semibold">Sertifikalarımız</h3>
             </div>
             <p className="text-gray-600 dark:text-gray-400">
               Ürünlerimiz ve süreçlerimiz ilgili kalite standartlarına uygun olarak belgelendirilmiştir. (Sertifika detayları eklenecek).
             </p>
             {/* Placeholder for certification logos/links */}
             <div className="flex space-x-4 pt-2">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center text-xs text-gray-500">ISO 9001</div>
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center text-xs text-gray-500">CE</div>
             </div>
           </div>
           <div>
             <Image
               alt="Kalite Güvence Görseli"
               className="rounded-lg shadow-md aspect-video object-cover"
               height={400}
               src="/placeholder.svg" // Replace with relevant image
               width={600}
             />
           </div>
        </section>

      </div>
    </div>
  )
} 