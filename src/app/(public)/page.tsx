import type { Metadata } from "next";
import Categories from "@/components/sections/Categories";
import FeaturedPackage from "@/components/sections/FeaturedPackage";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import QuickBooking from "@/components/sections/QuickBooking";

export const metadata: Metadata = {
  title: "SewaOutdoor - Premium Outdoor Rental",
  description: "Sewa gear outdoor premium untuk trip harian atau multi-day. Booking cepat, stok jelas, dan harga transparan.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SewaOutdoor - Premium Outdoor Rental",
    description: "Sewa gear outdoor premium untuk trip harian atau multi-day. Booking cepat, stok jelas, dan harga transparan.",
    url: "/",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <div className="bg-canvas">
      <Navbar />
      <Hero />
      <QuickBooking />
      <Categories />
      <FeaturedPackage />
      <Footer />
    </div>
  );
}
