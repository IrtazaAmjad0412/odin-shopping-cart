import { useOutletContext } from "react-router-dom";
import { CartList } from "../components/CartList/CartList";
import type { OutletContext } from "../types/context";

export const Cart = () => {
  const { cart, removeFromCart, updateCart } = useOutletContext<OutletContext>();

  return (
    <div>
      <CartList cart={cart} removeFromCart={removeFromCart} updateCart={updateCart} />
    </div>
  );
};
