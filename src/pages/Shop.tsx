import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { fetchAllProducts } from "../data/api";
import type { Product } from "../types/product";

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching Products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ProductList products={products} loading={loading} />
    </div>
  );
};
