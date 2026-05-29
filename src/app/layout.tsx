import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";

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
  title: "SewaOutdoor - Premium Outdoor Rental",
  description: "Booking alat outdoor semudah booking hotel."
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
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EVTCLY5HCB"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EVTCLY5HCB');`}
      </Script>
    </html>
  );
}
