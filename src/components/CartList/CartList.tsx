import type { CartListProps } from "../../types/props";
import { CartCard } from "../CartCard/CartCard";
import "./CartList.css";

export const CartList = ({ cart, removeFromCart, updateCart }: CartListProps) => {
  const showCartStatus = cart.length === 0;

  return (
    <div className="cart-list-section">
      <h1>Your Cart</h1>
      {showCartStatus ? (
        <p>Your Cartify Cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartCard
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateCart={updateCart}
          />
        ))
      )}
    </div>
  );
};
