import type { ProductCardProp } from "../../types/props";
import "./ProductCard.css";

export const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <div className="product-card-section">
      <img src={product.image ?? ""} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button type="button">Add To Cart</button>
    </div>
  );
};
