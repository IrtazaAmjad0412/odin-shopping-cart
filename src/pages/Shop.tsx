import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductList } from "../components/ProductList/ProductList";
import { fetchAllProducts } from "../data/api";
import type { Product } from "../types/product";
import type { OutletContext } from "../types/context";

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useOutletContext<OutletContext>();

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching Products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ProductList products={products} loading={loading} addToCart={addToCart} />
    </div>
  );
};
