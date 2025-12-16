import type { Product } from "./product";

export type ProductListProps = {
  products: Product[];
  loading: boolean;
};

export type ProductCardProp = {
  product: Product;
};
