import type { Product } from "./product";

export type ProductListProps = {
  products: Product[];
  loading: boolean;
  addToCart: () => void;
};

export type ProductCardProp = {
  product: Product;
  addToCart: () => void;
};
