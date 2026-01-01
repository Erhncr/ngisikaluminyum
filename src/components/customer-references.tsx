import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Elif, 3. sınıf velisi",
    quote:
      "Günlük programın sonunda aldığımız koçluk notları sayesinde nerede zorlandığını net görüyorum. Motivasyon rozetleri kızımın çok hoşuna gidiyor.",
  },
  {
    id: 2,
    name: "Mert, 4. sınıf öğrencisi",
    quote:
      "Zeka oyunlarını bitirdikten sonra gelen mini denemeler beni gerçek sınava hazırlıyor. Yanlışlarda nedenini anlatan yapay zeka koçunu çok seviyorum.",
  },
  {
    id: 3,
    name: "Dilek, psikolojik danışman",
    quote:
      "İçerikler çoklu zekâ alanlarını dengeli besliyor. Veliler panelden gelişimi izlerken çocuklar oyunlaştırılmış görevlerle motive kalıyor.",
  },
]

export function CustomerReferences() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-light" id="yorumlar">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:mb-12 text-foreground">
          Aileler ve öğrenciler ne diyor?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {testimonial.quote}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}