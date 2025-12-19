import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { totalCartQuantity } from "./utils/utils";
import type { Product } from "./types/product";
import type { CartItem } from "./types/cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartItemCount = totalCartQuantity(cart);

  const addToCart = (product: Product, quantity: number = 1) =>
    setCart((cart) => {
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        return cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...cart, { ...product, quantity }];
    });

  const removeFromCart = (product: Product) =>
    setCart((cart) => cart.filter((item) => item.id !== product.id));

  const updateCart = (product: Product, quantity: number = 1) => {
    const controlledQuantity = Math.max(1, Math.min(99, quantity));
    setCart((cart) =>
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: controlledQuantity } : item
      )
    );
  };

  return (
    <div>
      <AppHeader cartItemCount={cartItemCount} />
      <Outlet context={{ cart, addToCart, removeFromCart, updateCart }} />
    </div>
  );
}

export default App;
