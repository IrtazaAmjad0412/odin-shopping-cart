import type { CartItem } from "./cart";
import type { Product } from "./product";

export type OutletContext = {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  updateCart: (product: Product, quantity: number) => void;
};
