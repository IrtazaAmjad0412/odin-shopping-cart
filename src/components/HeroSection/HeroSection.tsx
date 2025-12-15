import { Link } from "react-router-dom";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <h2>Welcome to Cartify!</h2>
      <p>Quality products, seamless shopping.</p>
      <Link to="/shop">Shop Now</Link>
    </div>
  );
};
