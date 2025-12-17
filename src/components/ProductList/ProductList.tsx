import { ProductCard } from "../ProductCard/ProductCard";
import type { ProductListProps } from "../../types/props";
import "./ProductList.css";

export const ProductList = ({ products, loading, addToCart }: ProductListProps) => {
  const showStatus = loading || (!loading && products.length === 0);

  return (
    <div className={`product-list-section ${showStatus ? "status" : ""}`}>
      {loading && <p>... Loading Products</p>}
      {!loading && products.length === 0 && <p>No Products Found</p>}
      {!showStatus &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
  );
};
