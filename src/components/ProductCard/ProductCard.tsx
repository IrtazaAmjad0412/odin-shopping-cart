import { useState } from "react";
import { formatPrice } from "../../utils/utils";
import type { ProductCardProp } from "../../types/props";
import "./ProductCard.css";

export const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <div className="product-card-section">
      <img src={product.image ?? ""} alt={product.title} />
      <p>{product.title}</p>
      <p>${formatPrice(product.price)}</p>
      <div className="quantity-control">
        <button type="button">-</button>
        <input type="number" />
        <button type="button">+</button>
      </div>
      <button type="button">Add To Cart</button>
    </div>
  );
};
