"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { instagramShots } from "@/constants/home";

export default function InstagramGallery() {
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Instagram"
          title="Cinematic outdoor moments"
          description="Ikuti cerita trip terbaru di @sewaoutdoor."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {instagramShots.map((shot, index) => (
            <motion.div
              key={shot}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex h-40 items-end border border-hairline bg-soft-cloud p-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-mute">{shot}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
