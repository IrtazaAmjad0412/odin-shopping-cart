import React, { useState } from "react";
import { formatPrice } from "../../utils/utils";
import type { ProductCardProp } from "../../types/props";
import "./ProductCard.css";

export const ProductCard = ({ product, addToCart }: ProductCardProp) => {
  const [quantity, setQuantity] = useState<number | "">(1);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
      return;
    }
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      setQuantity(Math.min(99, Math.max(1, numericValue)));
    }
  };

  const handleOnBlur = () => {
    if (quantity === "") {
      setQuantity(1);
    }
  };

  const increaseQuantity = () =>
    setQuantity((quantity) => Math.min(99, Number(quantity) + 1));
  const decreaseQuantity = () =>
    setQuantity((quantity) => Math.max(1, Number(quantity) - 1));

  return (
    <div className="product-card-section">
      <img src={product.image ?? ""} alt={product.title} />
      <p>{product.title}</p>
      <p>${formatPrice(product.price)}</p>
      <div className="quantity-control">
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1 || quantity === ""}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <button type="button" onClick={increaseQuantity} disabled={quantity === 99}>
          +
        </button>
      </div>
      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};
