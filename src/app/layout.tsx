import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parlak Zeka | Bilsem Hazırlık Uygulaması",
  description: "Bilsem sınavına hazırlık için yapay zeka destekli, oyunlaştırılmış mobil uygulama.",
}

// Define Organization Schema data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Parlak Zeka",
  "url": "https://parlakzeka.app",
  "logo": "https://parlakzeka.app/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-530-000-00-00",
    "contactType": "Customer Service",
    "areaServed": "TR",
    "availableLanguage": ["Turkish"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bilkent Cyberpark",
    "addressLocality": "Çankaya",
    "addressRegion": "Ankara",
    "postalCode": "06800",
    "addressCountry": "TR"
  }
  // Add sameAs for social media links if available
  // "sameAs": [
  //   "https://www.facebook.com/yourpage",
  //   "https://www.instagram.com/yourpage"
  // ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Add GA component right after body opening */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics />
        )}
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 