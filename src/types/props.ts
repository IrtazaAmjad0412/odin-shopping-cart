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
  removeFromCart: (product: Product) => void;
  updateCart: (product: Product, quantity: number) => void;
};

export type CartCardProp = {
  item: CartItem;
  removeFromCart: (product: Product) => void;
  updateCart: (product: Product, quantity: number) => void;
};

export type AppHeaderProp = {
  cartItemCount: number;
};
