import Image from "next/image"
import Link from "next/link"

interface ImageGridProps {
  images: string[]
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Link
          key={index}
          href={`/${image}`}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <Image
            src={`/${image}`}
            alt={`Üretim Görseli ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-medium">Detayları Gör</span>
          </div>
        </Link>
      ))}
    </div>
  )
} 