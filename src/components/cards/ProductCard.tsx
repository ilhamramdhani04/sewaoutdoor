import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

const statusMap: Record<Product["status"], { label: string; className: string }> = {
  available: { label: "Ready", className: "border-hairline text-ink" },
  limited: { label: "Limited", className: "border-sale text-sale" },
  rented: { label: "Rented", className: "border-hairline text-mute" }
};

export default function ProductCard({ product }: ProductCardProps) {
  const status = statusMap[product.status];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col border border-hairline bg-canvas p-4 transition hover:-translate-y-1 hover:border-ink"
    >
      <div className="relative overflow-hidden bg-soft-cloud">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{product.category}</Badge>
          <Badge className={`border ${status.className}`}>{status.label}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-4">
        <div>
          <p className="font-heading text-lg text-ink uppercase tracking-[0.06em]">
            {product.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-mute">Stok {product.stock} unit</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-mute">
          {product.highlights.map((item) => (
            <span key={item} className="rounded-full border border-hairline px-3 py-1">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-mute">Mulai dari</p>
            <p className="font-heading text-base text-ink">
              {formatRupiah(product.pricePerDay)}/hari
            </p>
          </div>
          <span className="rounded-full border border-hairline px-4 py-2 text-xs font-semibold text-ink transition group-hover:border-ink">
            Detail
          </span>
        </div>
      </div>
    </Link>
  );
}
