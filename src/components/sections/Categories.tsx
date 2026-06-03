"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { categories } from "@/constants/home";
import { productCategories } from "@/constants/products";

export default function Categories() {
  const getCategorySlug = (name: string) => {
    const categoryData = productCategories.find((cat) => cat.name === name);
    return categoryData?.slug || name.toLowerCase();
  };

  return (
    <section id="kategori" className="py-14 md:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Kategori"
          title="Temukan gear sesuai kebutuhanmu"
          description="Pilih kategori dengan cepat dan langsung lihat ketersediaan stok."
        />
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/catalog?cat=${getCategorySlug(category.name)}`}>
                <div className="min-w-[240px] max-w-[300px] flex-1 cursor-pointer border border-hairline bg-canvas transition hover:-translate-y-1 hover:border-ink sm:min-w-[280px]">
                  <div className="h-48 overflow-hidden bg-soft-cloud sm:h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 sm:px-5 sm:py-4">
                    <p className="font-heading text-base text-ink uppercase tracking-[0.12em] sm:text-lg">
                      {category.name}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
