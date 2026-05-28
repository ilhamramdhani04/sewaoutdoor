import Categories from "@/components/sections/Categories";
import FeaturedPackage from "@/components/sections/FeaturedPackage";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Navbar from "@/components/sections/Navbar";
import QuickBooking from "@/components/sections/QuickBooking";

export default function HomePage() {
  return (
    <div className="bg-canvas">
      <Navbar />
      <Hero />
      <QuickBooking />
      <Categories />
      <FeaturedPackage />
      <InstagramGallery />
      <Footer />
    </div>
  );
}
