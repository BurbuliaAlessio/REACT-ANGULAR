import { useState, useEffect } from "react";
import { getProducts } from "../api/products.api";
import type { product } from "../models/product.model";

export const useProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error on load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
