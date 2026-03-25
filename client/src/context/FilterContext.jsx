import { createContext, useContext, useState, useCallback } from "react";

/**
 * FilterContext — Global state for marketplace filters
 * Manages: searchTerm, district, category, priceRange, sortBy
 */
const FilterContext = createContext();

// Default filter values
const defaultFilters = {
  searchTerm: "",
  district: "",
  category: "",
  priceRange: ["", ""],
  sortBy: "newest",
};

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(defaultFilters);

  // Update a single filter key
  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Reset all filters to default
  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // Check if any filter is active
  const hasActiveFilters =
    filters.searchTerm !== "" ||
    filters.district !== "" ||
    filters.category !== "" ||
    filters.priceRange[0] !== "" ||
    filters.priceRange[1] !== "" ||
    filters.sortBy !== "newest";

  return (
    <FilterContext.Provider
      value={{ filters, updateFilter, clearFilters, hasActiveFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

/**
 * Custom hook to consume filter context
 */
export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
}
