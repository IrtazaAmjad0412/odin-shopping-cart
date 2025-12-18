import { useOutletContext } from "react-router-dom";
import { formatPrice } from "../utils/utils";
import type { OutletContext } from "../types/context";

export const Cart = () => {
  const { cart } = useOutletContext<OutletContext>();
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title} </p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${formatPrice(item.price)}</p>
              <p>Total Price: ${formatPrice(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
