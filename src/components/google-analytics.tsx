'use client' // Script loading and interactions happen client-side

import React, { useEffect } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'

// Function to log page views - can be expanded for other events
const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (typeof window.gtag !== 'undefined') {
      window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
      });
  }
};

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
      if (!GA_MEASUREMENT_ID) {
          console.warn("Google Analytics Measurement ID is not set.");
          return;
      }
      const url = pathname + searchParams.toString();
      pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  // Render script only if ID is available
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive" // Load after the page becomes interactive
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Declare gtag on window type to avoid TypeScript errors
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
} 