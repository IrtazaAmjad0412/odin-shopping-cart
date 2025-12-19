import { formatPrice } from "../../utils/utils";
import type { CartCardProp } from "../../types/props";
import "./CartCard.css";

export const CartCard = ({ item, removeFromCart, updateCart }: CartCardProp) => {
  return (
    <div className="cart-card-section">
      <img src={item.image ?? ""} alt={item.title} />
      <div className="cart-card-details">
        <p>{item.title} </p>
        <div>
          <p>Price: ${formatPrice(item.price)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <p>Total Price: ${formatPrice(item.price * item.quantity)}</p>
        <div className="quantity-control">
          <button
            type="button"
            onClick={() => updateCart(item, item.quantity - 1)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => updateCart(item, item.quantity + 1)}
            disabled={item.quantity === 99}
          >
            +
          </button>
          <button
            className="remove-btn"
            type="button"
            onClick={() => removeFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
