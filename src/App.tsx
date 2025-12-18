import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import type { Product } from "./types/product";
import type { CartItem } from "./types/cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((cart) => {
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        return cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...cart, { ...product, quantity }];
    });
  };

  return (
    <div>
      <AppHeader />
      <Outlet context={{ cart, addToCart }} />
    </div>
  );
}

export default App;
