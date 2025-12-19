import type { CartItem } from "../types/cart";

export const formatPrice = (price: number): string => {
  return price.toFixed(2);
};

export const totalCartQuantity = (cart: CartItem[]) =>
  cart.reduce((acc, item) => acc + item.quantity, 0);
