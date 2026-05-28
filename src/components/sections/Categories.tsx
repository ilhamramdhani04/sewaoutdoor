"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { categories } from "@/constants/home";

export default function Categories() {
  return (
    <section id="kategori" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Kategori"
          title="Temukan gear sesuai kebutuhanmu"
          description="Pilih kategori dengan cepat dan langsung lihat ketersediaan stok."
        />
        <div className="flex gap-6 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="min-w-[280px] max-w-[320px] flex-1 border border-hairline bg-canvas"
            >
              <div className="h-64 bg-soft-cloud" />
              <div className="space-y-2 px-5 py-4">
                <p className="font-heading text-lg text-ink uppercase tracking-[0.12em]">
                  {category.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-mute">{category.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
