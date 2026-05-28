import Link from "next/link";
import Container from "@/components/shared/Container";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Badge } from "@/components/ui/badge";
import { getButtonClasses } from "@/components/ui/button";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/constants/products";
import { formatRupiah } from "@/lib/utils";

type ProductDetailPageProps = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const normalizedSlug = decodeURIComponent(params.slug).toLowerCase();
  const product = products.find((item) => item.slug.toLowerCase() === normalizedSlug);

  if (!product) {
    return (
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <section className="py-20">
          <Container className="space-y-6 border border-hairline bg-canvas p-8">
            <h1 className="font-heading text-2xl text-ink uppercase tracking-[0.08em]">
              Produk tidak ditemukan
            </h1>
            <p className="text-sm text-mute">
              Slug "{params.slug}" belum ada di data. Coba pilih dari katalog.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-canvas"
              >
                Kembali ke katalog
              </Link>
              <Link
                href="/"
                className="rounded-full border border-hairline px-5 py-2 text-sm font-semibold text-ink"
              >
                Beranda
              </Link>
            </div>
            <div className="text-xs text-mute">
              Coba salah satu slug: {products.map((item) => item.slug).join(", ")}
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id);

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <section className="border-b border-hairline py-10">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-sm text-mute">
            <Link href="/catalog" className="hover:text-ink">
              Katalog
            </Link>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="border border-hairline bg-soft-cloud p-6">
              <div className="aspect-[16/10] bg-canvas" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`thumb-${index}`}
                  className="aspect-[4/3] border border-hairline bg-soft-cloud"
                />
              ))}
            </div>
            <div className="space-y-4 border border-hairline bg-canvas p-6">
              <h3 className="font-heading text-xl text-ink uppercase tracking-[0.08em]">Spesifikasi</h3>
              <ul className="grid gap-2 text-sm text-mute">
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Badge>{product.category}</Badge>
              <h1 className="font-heading text-3xl text-ink uppercase tracking-[0.06em]">
                {product.name}
              </h1>
              <p className="text-sm text-mute">
                Gear premium yang selalu dicek sebelum dikirim. Cocok untuk trip 1-3 hari.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-mute">
                <span>Stok {product.stock} unit</span>
                <span>•</span>
                <span>Deposit {formatRupiah(product.deposit)}</span>
              </div>
            </div>

            <div className="space-y-4 border border-hairline bg-canvas p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-mute">Harga sewa per hari</p>
                <p className="font-heading text-2xl text-ink">
                  {formatRupiah(product.pricePerDay)}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">Tanggal sewa</p>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">Tanggal kembali</p>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">Jumlah</p>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">Lokasi pick-up</p>
                  <input
                    placeholder="Bandung"
                    className="mt-2 w-full rounded-full border border-hairline bg-soft-cloud px-3 py-2 text-sm text-ink"
                  />
                </div>
              </div>
              <Link href="/checkout" className={getButtonClasses("primary", "w-full")}>
                Tambah ke Keranjang
              </Link>
              <Link href="/catalog" className={getButtonClasses("outline", "w-full")}>
                Cek Ketersediaan
              </Link>
            </div>

            <div className="space-y-4 border border-hairline bg-canvas p-6">
              <h3 className="font-heading text-xl text-ink uppercase tracking-[0.08em]">
                Termasuk di paket
              </h3>
              <ul className="grid gap-2 text-sm text-mute">
                {product.includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-8">
          <h2 className="font-heading text-2xl text-ink uppercase tracking-[0.08em]">
            Gear terkait
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.length > 0 ? (
              related.map((item) => <ProductCard key={item.id} product={item} />)
            ) : (
              products
                .filter((item) => item.id !== product.id)
                .slice(0, 3)
                .map((item) => <ProductCard key={item.id} product={item} />)
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
