import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";
import MobileBottomNav from "@/components/sections/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sewaoutdoor.vercel.app";
const siteName = "SewaOutdoor";
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"]
});

const accentFont = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SewaOutdoor - Premium Outdoor Rental",
    template: "%s | SewaOutdoor"
  },
  description: "Booking alat outdoor semudah booking hotel.",
  applicationName: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SewaOutdoor - Premium Outdoor Rental",
    description: "Booking alat outdoor semudah booking hotel.",
    url: "/",
    siteName,
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SewaOutdoor - Premium Outdoor Rental",
    description: "Booking alat outdoor semudah booking hotel."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: googleVerification ? { google: googleVerification } : undefined
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>
      <body className="min-h-screen bg-canvas text-ink antialiased">
        {children}
        <MobileBottomNav />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
