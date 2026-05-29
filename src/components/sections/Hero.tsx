"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { getButtonClasses } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { quickStats } from "@/constants/home";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-20 pt-24 md:pt-32">
      <div className="absolute inset-0 nike-grid" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <Badge>Premium Outdoor Rental</Badge>
            <h1 className="font-accent text-5xl uppercase leading-[0.9] tracking-tight text-ink md:text-7xl">
              Sewa alat camping,
              <br />
              ambil dan berangkat.
            </h1>
            <p className="max-w-xl text-lg text-mute">
              Fokus pada kecepatan booking, kualitas gear, dan pengalaman sewa yang rapi.
              Pilih tanggal, ambil, dan berangkat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className={getButtonClasses("primary")}>
                Mulai Booking
              </Link>
              <Link href="/catalog" className={getButtonClasses("outline")}>
                Lihat Katalog
              </Link>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-full border border-hairline px-4 py-3">
                  <p className="font-heading text-xl text-ink">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-none border border-hairline bg-soft-cloud max-w-sm mx-auto">
              <img
                src="/images/catalog/poster.png"
                alt="Poster campaign story"
                className="w-full h-auto"
              />
              <div className="border-t border-hairline px-6 py-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-mute">
                  <span>Gear curated</span>
                  <span>Ready today</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
