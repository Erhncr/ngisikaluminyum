import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "NG IŞIK - Modern Alüminyum Sistemleri",
  description: "Modern mimariye uygun, enerji tasarruflu ve dayanıklı alüminyum sistemleri.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={spaceMono.variable}>
      <body className="font-space-mono">
        <Header />
        {children}
      </body>
    </html>
  )
} 