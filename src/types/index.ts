export type ProductStatus = "available" | "limited" | "rented";

export type ProductCategory = {
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  pricePerDay: number;
  deposit: number;
  stock: number;
  status: ProductStatus;
  highlights: string[];
  specs: string[];
  includedItems: string[];
  tone: string;
};
