"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/constants/home";
import Container from "@/components/shared/Container";
import { getButtonClasses } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur"
    >
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-ink" />
            <span className="font-heading text-lg uppercase tracking-[0.2em]">SewaOutdoor</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-mute transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className={getButtonClasses("ghost", "hidden md:inline-flex")}
          >
            Masuk
          </Link>
          <Link href="/catalog" className={getButtonClasses("primary")}> 
            Mulai Booking
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
