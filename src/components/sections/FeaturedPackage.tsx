"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { getButtonClasses } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedPackage() {
  return (
    <section id="paket" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 border border-ink bg-ink p-10 text-canvas lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-stone">
              Paket unggulan
            </p>
            <h2 className="font-accent text-4xl uppercase leading-[0.95] md:text-5xl">
              Paket Camping 2D1N siap berangkat
            </h2>
            <p className="text-stone">
              Semua kebutuhan camping dalam satu paket premium. Tinggal pilih tanggal, ambil,
              dan nikmati alam.
            </p>
            <ul className="grid gap-3 text-sm text-stone sm:grid-cols-2">
              <li>2x Tenda 4P</li>
              <li>4x Sleeping Bag</li>
              <li>Cooking set lengkap</li>
              <li>Lighting + power pack</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/catalog"
                className={getButtonClasses("primary", "bg-canvas text-ink hover:bg-soft-cloud")}
              >
                Booking Paket
              </Link>
              <span className="text-sm text-stone">Mulai Rp 380.000</span>
            </div>
          </div>
          <div className="border border-hairline bg-soft-cloud">
            <div className="h-full min-h-[320px] bg-canvas" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
