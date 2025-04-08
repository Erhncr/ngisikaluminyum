import React from 'react'
import { ContactForm } from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon, MessageCircleIcon } from 'lucide-react' // Using lucide-react icons
import Link from 'next/link'

// Metadata for the page
export const metadata = {
  title: "İletişim - NG Işık Alüminyum",
  description: "Bizimle iletişime geçin. Sorularınız ve talepleriniz için formumuzu doldurun veya iletişim bilgilerimizi kullanın.",
}

export default function ContactPage() {
  const whatsappNumber = "905367277217" // Your WhatsApp number (without +)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Merhaba, web sitenizden ulaşıyorum.")}`

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-10 md:mb-14">
        Bize Ulaşın
      </h1>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h2>
          <ContactForm />
        </div>

        {/* Contact Information & Map Section */}
        <div className="space-y-8">
          {/* Contact Details Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">İletişim Bilgilerimiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Veysel Karani, Küçükbalıklı Cd. no:113, 16270 Osmangazi̇/Bursa
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <a href="tel:+905367277217" className="text-gray-600 dark:text-gray-400 hover:underline">
                    0536 727 72 17
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MailIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <a href="mailto:info@ngisikaluminyum.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                    info@ngisikaluminyum.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Çalışma Saatleri</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Hafta İçi: 09:00 - 18:00<br />
                    Cumartesi: 09:00 - 14:00<br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>
              {/* WhatsApp Button */}
              <Button asChild size="lg" className="w-full mt-4 bg-green-600 hover:bg-green-700">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircleIcon className="mr-2 h-5 w-5" /> WhatsApp'tan Yazın
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Google Maps Embed */}
          <div className="space-y-2">
             <h2 className="text-2xl font-semibold">Konumumuz</h2>
             <div className="aspect-video w-full overflow-hidden rounded-lg border">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.439789699645!2d29.08079437679192!3d40.22111097141819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e0d01c19a7d%3A0x9b3b489b8c10d0e6!2sVeysel%20Karani%2C%20K%C3%BC%C3%A7%C3%BCkbal%C4%B1kl%C4%B1%20Cd.%20No%3A113%2C%2016270%20Osmangazi%2FBursa!5e0!3m2!1str!2str!4v1722614881327!5m2!1str!2str"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen={true}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="NG Işık Alüminyum Konumu"
               ></iframe>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
} 