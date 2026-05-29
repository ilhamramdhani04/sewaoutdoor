import type { Route } from "next";

export const navLinks: ReadonlyArray<{ label: string; href: Route }> = [
  { label: "Beranda", href: "/" },
  { label: "Katalog", href: "/catalog" },
  { label: "Kategori", href: "/#kategori" },
  { label: "Paket", href: "/#paket" }
];

export const quickStats = [
  { label: "Item Premium", value: "180+" },
  { label: "Lokasi Pick-up", value: "12" },
  { label: "Booking per Bulan", value: "4.8K" }
];

export const categories = [
  { name: "Tenda", image: "/images/catalog/tendaeiger4p.jpg", tone: "bg-soft-cloud" },
  { name: "Carrier", image: "/images/catalog/carrierconsina60l.jpg", tone: "bg-canvas" },
  { name: "Sleeping Bag", image: "/images/catalog/sleepingbagrei.jpg", tone: "bg-soft-cloud" },
  { name: "Matras", image: "/images/catalog/matrasaluminium.jpg", tone: "bg-canvas" },
  { name: "Lighting", image: "/images/catalog/headlampnaturehika.jpg", tone: "bg-soft-cloud" },
  { name: "Cooking Set", image: "/images/catalog/cookingset.jpg", tone: "bg-canvas" },
  { name: "Hiking Gear", image: "/images/catalog/trekkingpolecarbon.jpg", tone: "bg-soft-cloud" },
  { name: "Hammock", image: "/images/catalog/hammock.jpg", tone: "bg-canvas" }
];


export const whyChoose = [
  {
    title: "Booking cepat",
    description: "Cari, pilih tanggal, bayar, dan siap berangkat dalam hitungan menit."
  },
  {
    title: "Gear premium",
    description: "Semua peralatan dirawat dengan standar adventure dan dicek sebelum dipinjamkan."
  },
  {
    title: "Support aktif",
    description: "Tim outdoor kami siap bantu rekomendasi gear dan itinerary."
  }
];

export const instagramShots = [
  "Summit sunrise",
  "Campfire vibes",
  "Gear prep",
  "Forest trail",
  "Team moment",
  "Basecamp"
];
