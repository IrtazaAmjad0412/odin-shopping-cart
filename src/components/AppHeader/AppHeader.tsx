import { Link } from "react-router-dom";
import type { AppHeaderProp } from "../../types/props";
import "./AppHeader.css";

export const AppHeader = ({ cartItemCount }: AppHeaderProp) => {
  return (
    <div className="header-section">
      <h1>Cartify</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart
            </Link>
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};
