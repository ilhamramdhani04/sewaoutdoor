import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Katalog Gear Outdoor",
  description: "Jelajahi katalog tenda, carrier, sleeping bag, dan gear outdoor lainnya. Filter kategori dan cek ketersediaan langsung.",
  alternates: {
    canonical: "/catalog"
  },
  openGraph: {
    title: "Katalog Gear Outdoor",
    description: "Jelajahi katalog tenda, carrier, sleeping bag, dan gear outdoor lainnya. Filter kategori dan cek ketersediaan langsung.",
    url: "/catalog",
    type: "website"
  }
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
      <CatalogClient />
    </Suspense>
  );
}
