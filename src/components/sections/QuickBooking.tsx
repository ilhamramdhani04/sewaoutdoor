"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { getButtonClasses } from "@/components/ui/button";
import Link from "next/link";

export default function QuickBooking() {
  return (
    <section className="relative -mt-10 pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-none border border-hairline bg-canvas p-6"
        >
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Lokasi pick-up</p>
              <input
                placeholder="Bandung, Lembang"
                className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-4 py-3 text-sm text-ink focus:outline-none"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Tanggal sewa</p>
              <input
                type="date"
                className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-4 py-3 text-sm text-ink focus:outline-none"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Tanggal kembali</p>
              <input
                type="date"
                className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-4 py-3 text-sm text-ink focus:outline-none"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Jumlah orang</p>
              <input
                type="number"
                min={1}
                defaultValue={2}
                className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-4 py-3 text-sm text-ink focus:outline-none"
              />
            </div>
            <div className="flex items-end">
              <Link href="/catalog" className={getButtonClasses("primary", "w-full")}>
                Cek Ketersediaan
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
