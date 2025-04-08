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
  title: "NG Işık Alüminyum",
  description: "Kaliteli Cam ve Kapı Sineklikleri",
}

// Define Organization Schema data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NG Işık Alüminyum",
  "url": "https://www.ngisikaluminyum.com", // Replace with actual domain
  "logo": "https://www.ngisikaluminyum.com/logo.png", // Replace with actual logo URL
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-536-727-72-17",
    "contactType": "Customer Service", // Or "Sales", "Technical Support" etc.
    "areaServed": "TR", // ISO 3166-1 alpha-2 country code
    "availableLanguage": ["Turkish"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Küçükbalıklı Cd. No:113, Veysel Karani",
    "addressLocality": "Osmangazi",
    "addressRegion": "Bursa",
    "postalCode": "16270",
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