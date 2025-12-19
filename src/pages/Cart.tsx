import { useOutletContext } from "react-router-dom";
import { CartList } from "../components/CartList/CartList";
import type { OutletContext } from "../types/context";

export const Cart = () => {
  const { cart } = useOutletContext<OutletContext>();

  return (
    <div>
      <CartList cart={cart} />
    </div>
  );
};
