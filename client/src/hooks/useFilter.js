import { useState, useEffect } from "react";

/**
 * useFilter — Data fetching hook for products
 * Constructs query from filter state and fetches from backend
 *
 * @param {Object} filters - The current filter state from FilterContext
 * @param {Number} page - Current page number
 * @returns {Object} - { products, loading, error, total, pagination }
 */
export default function useFilter(filters, page = 1) {
  const [data, setData] = useState({
    products: [],
    loading: true,
    error: null,
    total: 0,
    pagination: {},
  });

  const { searchTerm, district, category, priceRange, sortBy } = filters;

  useEffect(() => {
    const fetchProducts = async () => {
      setData((prev) => ({ ...prev, loading: true }));

      try {
        const queryParams = new URLSearchParams();
        
        // Search
        if (searchTerm) queryParams.append("search", searchTerm);
        
        // Filters
        if (district) queryParams.append("location.district", district);
        if (category) queryParams.append("category", category);
        
        // Price Range [min, max]
        // Price Range [min, max]
        if (priceRange[0] !== "") queryParams.append("minPrice", priceRange[0]);
        if (priceRange[1] !== "") queryParams.append("maxPrice", priceRange[1]);

        
        // Page & Sorting
        queryParams.append("page", page);
        queryParams.append("limit", 9);
        
        if (sortBy === "price-low") queryParams.append("sort", "price");
        if (sortBy === "price-high") queryParams.append("sort", "-price");
        if (sortBy === "newest") queryParams.append("sort", "-createdAt");

        const res = await fetch(`http://localhost:5000/api/products?${queryParams.toString()}`);
        const result = await res.json();

        if (res.ok) {
          setData({
            products: result.data,
            loading: false,
            error: null,
            total: result.total,
            pagination: result.pagination,
          });
        } else {
          throw new Error(result.message || "Failed to fetch products");
        }
      } catch (err) {
        setData((prev) => ({ ...prev, loading: false, error: err.message }));
      }
    };

    // Minor debounce for search
    const timer = setTimeout(fetchProducts, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, district, category, priceRange, sortBy, page]);

  return data;
}
