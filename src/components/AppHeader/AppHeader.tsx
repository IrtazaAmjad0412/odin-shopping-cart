import { Link } from "react-router-dom";
import "./AppHeader.css";

export const AppHeader = () => {
  return (
    // Add link for cartify h1 tag to the home page
    <div className="header-section">
      <div>
        <h1>Cartify</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
