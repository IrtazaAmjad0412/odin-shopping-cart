import type { CartItem } from "./cart";
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

export type CartListProps = {
  cart: CartItem[];
};

export type CartCardProp = {
  item: CartItem;
};
