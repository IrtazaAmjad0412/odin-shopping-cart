import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { fetchAllProducts } from "../data/api";

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching Products:", err));
    // Use .finally method to eventually set isLoading state
  }, []);

  return (
    <div>
      Shop Page
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
