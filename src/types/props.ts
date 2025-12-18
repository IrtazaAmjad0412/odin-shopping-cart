import type { Product } from "./product";

export type ProductListProps = {
  products: Product[];
  loading: boolean;
  addToCart: (product: Product, quantity: number) => void;
};

export type ProductCardProp = {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
};
