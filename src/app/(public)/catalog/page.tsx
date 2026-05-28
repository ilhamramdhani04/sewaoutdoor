"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ProductCard from "@/components/cards/ProductCard";
import { productCategories, products } from "@/constants/products";
import { Button } from "@/components/ui/button";

export default function CatalogPage() {
  const pageSize = 6;
  const router = useRouter();
  const searchParams = useSearchParams();
  const skipUrlUpdate = useRef(false);
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedAvailability, setSelectedAvailability] = useState<Set<string>>(new Set());
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  const categorySlugByName = useMemo(() => {
    return productCategories.reduce<Record<string, string>>((acc, category) => {
      acc[category.name] = category.slug;
      return acc;
    }, {});
  }, []);

  const priceBounds = useMemo(() => {
    const prices = products.map((product) => product.pricePerDay);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { min, max };
  }, []);

  const normalizedMin = minPrice.trim() === "" ? priceBounds.min : Number(minPrice);
  const normalizedMax = maxPrice.trim() === "" ? priceBounds.max : Number(maxPrice);

  useEffect(() => {
    const queryFromUrl = searchParams.get("q") ?? "";
    const categoriesFromUrl = (searchParams.get("cat") ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const availabilityFromUrl = (searchParams.get("avail") ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const minFromUrl = searchParams.get("min") ?? "";
    const maxFromUrl = searchParams.get("max") ?? "";
    const sortFromUrl = searchParams.get("sort") ?? "popular";
    const pageFromUrl = Number(searchParams.get("page") ?? "1");

    skipUrlUpdate.current = true;
    setQuery(queryFromUrl);
    setSelectedCategories(new Set(categoriesFromUrl));
    setSelectedAvailability(new Set(availabilityFromUrl));
    setMinPrice(minFromUrl);
    setMaxPrice(maxFromUrl);
    setSortBy(sortFromUrl);
    setCurrentPage(Number.isNaN(pageFromUrl) ? 1 : Math.max(1, pageFromUrl));
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const minValue = Number(minPrice);
    const maxValue = Number(maxPrice);
    const hasMin = minPrice.trim() !== "" && !Number.isNaN(minValue);
    const hasMax = maxPrice.trim() !== "" && !Number.isNaN(maxValue);
    const normalizedQuery = query.trim().toLowerCase();

    const items = products.filter((product) => {
      const slug = categorySlugByName[product.category] ?? product.category;
      const matchesCategory =
        selectedCategories.size === 0 || selectedCategories.has(slug);
      const matchesAvailability =
        selectedAvailability.size === 0 || selectedAvailability.has(product.status);
      const matchesPrice =
        (!hasMin || product.pricePerDay >= minValue) &&
        (!hasMax || product.pricePerDay <= maxValue);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesAvailability && matchesPrice && matchesQuery;
    });

    const sorted = [...items];
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === "stock-desc") {
      sorted.sort((a, b) => b.stock - a.stock);
    }

    return sorted;
  }, [categorySlugByName, maxPrice, minPrice, query, selectedAvailability, selectedCategories, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const pagedProducts = filteredProducts.slice((safePage - 1) * pageSize, safePage * pageSize);

  useEffect(() => {
    if (skipUrlUpdate.current) {
      skipUrlUpdate.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (query.trim().length > 0) {
      params.set("q", query.trim());
    }
    if (selectedCategories.size > 0) {
      params.set("cat", Array.from(selectedCategories).join(","));
    }
    if (selectedAvailability.size > 0) {
      params.set("avail", Array.from(selectedAvailability).join(","));
    }
    if (minPrice.trim().length > 0) {
      params.set("min", minPrice.trim());
    }
    if (maxPrice.trim().length > 0) {
      params.set("max", maxPrice.trim());
    }
    if (sortBy !== "popular") {
      params.set("sort", sortBy);
    }
    if (safePage > 1) {
      params.set("page", String(safePage));
    }

    const nextQuery = params.toString();
    router.replace(nextQuery.length > 0 ? `?${nextQuery}` : "?", { scroll: false });
  }, [maxPrice, minPrice, query, router, safePage, selectedAvailability, selectedCategories, sortBy]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
    setCurrentPage(1);
  };

  const toggleAvailability = (status: string) => {
    setSelectedAvailability((prev) => {
      const next = new Set(prev);
      if (next.has(status)) {
        next.delete(status);
      } else {
        next.add(status);
      }
      return next;
    });
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedCategories(new Set());
    setSelectedAvailability(new Set());
    setMinPrice("");
    setMaxPrice("");
    setSortBy("popular");
    setCurrentPage(1);
  };

  const updateMinPrice = (value: number | string) => {
    const nextValue = Number(value);
    if (Number.isNaN(nextValue)) {
      setMinPrice("");
      return;
    }
    const clamped = Math.min(nextValue, normalizedMax);
    setMinPrice(clamped.toString());
    setCurrentPage(1);
  };

  const updateMaxPrice = (value: number | string) => {
    const nextValue = Number(value);
    if (Number.isNaN(nextValue)) {
      setMaxPrice("");
      return;
    }
    const clamped = Math.max(nextValue, normalizedMin);
    setMaxPrice(clamped.toString());
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <section className="border-b border-hairline pb-12 pt-16">
        <Container className="space-y-6">
          <SectionHeader
            eyebrow="Katalog"
            title="Pilih gear terbaik untuk trip berikutnya"
            description="Filter kategori, cek stok, dan booking lebih cepat dengan tampilan premium."
          />
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari tenda, carrier, atau gear lainnya"
              className="w-full rounded-full border border-hairline bg-soft-cloud px-4 py-3 text-sm text-ink"
            />
            <div className="flex items-center gap-3">
              <Button variant="outline" className="w-full" onClick={resetFilters}>
                Reset filter
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => {
              const isActive = selectedCategories.has(category.slug);
              return (
                <button
                  key={category.slug}
                  onClick={() => toggleCategory(category.slug)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-ink bg-ink text-canvas"
                      : "border-hairline text-mute hover:border-ink hover:text-ink"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6 border border-hairline bg-canvas p-6">
            <div>
              <p className="font-heading text-lg text-ink uppercase tracking-[0.08em]">Filter</p>
              <p className="text-sm text-mute">Atur kategori dan preferensi.</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">Kategori</p>
              <div className="space-y-2 text-sm text-mute">
                {productCategories.map((category) => (
                  <label key={category.slug} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(category.slug)}
                      onChange={() => toggleCategory(category.slug)}
                      className="h-4 w-4 rounded border-white/20"
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">Ketersediaan</p>
              <div className="space-y-2 text-sm text-mute">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAvailability.has("available")}
                    onChange={() => toggleAvailability("available")}
                    className="h-4 w-4 rounded border-white/20"
                  />
                  Ready
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAvailability.has("limited")}
                    onChange={() => toggleAvailability("limited")}
                    className="h-4 w-4 rounded border-white/20"
                  />
                  Limited
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">Harga per hari</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-mute">
                  <span>Rp {priceBounds.min.toLocaleString("id-ID")}</span>
                  <span>Rp {priceBounds.max.toLocaleString("id-ID")}</span>
                </div>
                <div className="relative h-6">
                  <input
                    type="range"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    step={5000}
                    value={normalizedMin}
                    onChange={(event) => updateMinPrice(event.target.value)}
                    className="absolute inset-0 w-full accent-sand-beige"
                  />
                  <input
                    type="range"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    step={5000}
                    value={normalizedMax}
                    onChange={(event) => updateMaxPrice(event.target.value)}
                    className="absolute inset-0 w-full accent-sand-beige"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-mute">
                  <span>Min: Rp {normalizedMin.toLocaleString("id-ID")}</span>
                  <span>Max: Rp {normalizedMax.toLocaleString("id-ID")}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  placeholder="Min"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value)}
                  className="w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                />
                <input
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                />
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={resetFilters}>
              Reset Filter
            </Button>
          </aside>

          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-mute">
                Menampilkan {pagedProducts.length} dari {filteredProducts.length} gear premium
              </p>
              <div className="flex items-center gap-3 text-sm text-mute">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                >
                  <option value="popular">Terpopuler</option>
                  <option value="price-asc">Harga termurah</option>
                  <option value="price-desc">Harga tertinggi</option>
                  <option value="stock-desc">Stok terbanyak</option>
                </select>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.length > 0 ? (
                pagedProducts.map((product) => <ProductCard key={product.id} product={product} />)
              ) : (
                <div className="border border-hairline bg-canvas p-6 text-sm text-mute md:col-span-2 xl:col-span-3">
                  Tidak ada gear yang cocok. Coba reset filter atau ubah kata kunci.
                </div>
              )}
            </div>
            {filteredProducts.length > pageSize ? (
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={safePage === 1}
                >
                  Prev
                </Button>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const isActive = pageNumber === safePage;
                  return (
                    <Button
                      key={`page-${pageNumber}`}
                      variant={isActive ? "primary" : "outline"}
                      onClick={() => goToPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
                <Button
                  variant="outline"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={safePage === totalPages}
                >
                  Next
                </Button>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
