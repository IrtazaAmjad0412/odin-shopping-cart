import type { Product } from "../types/product";

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch all Products!");
    }
    return await res.json();
  } catch (err) {
    console.error("Api Error:", err);
    throw err;
  }
};
