import { formatPrice } from "../../utils/utils";
import type { CartCardProp } from "../../types/props";
import "./CartCard.css";

export const CartCard = ({ item }: CartCardProp) => {
  return (
    <div className="cart-card-section">
      <img src={item.image ?? ""} alt={item.title} />
      <div>
        <p>{item.title} </p>
        <div>
          <p>Price: ${formatPrice(item.price)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <p>Total Price: ${formatPrice(item.price * item.quantity)}</p>
      </div>
    </div>
  );
};
