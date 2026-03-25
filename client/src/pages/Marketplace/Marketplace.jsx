import { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import SearchBar from "../../components/Marketplace/SearchBar";
import FilterSidebar from "../../components/Marketplace/FilterSidebar";
import ProductCard from "../../components/Marketplace/ProductCard";
import ProductModal from "../../components/Marketplace/ProductModal";
import Button from "../../components/Common/Button";
import Pagination from "../../components/Common/Pagination";
import { useFilterContext } from "../../context/FilterContext";
import useFilter from "../../hooks/useFilter";

/**
 * Marketplace — Main page assembling all components
 */
export default function Marketplace() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { filters, clearFilters, hasActiveFilters } = useFilterContext();

  // Apply all filters through the unified hook (now API-driven)
  const { products, loading, error, total } = useFilter(filters, currentPage);

  const itemsPerPage = 9;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onToggleFilter={() => setIsFilterOpen((prev) => !prev)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Results count & active filter info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">
                {total}
              </span>{" "}
              {total === 1 ? "product" : "products"} found
              {filters.district && (
                <span className="ml-1">
                  in{" "}
                  <span className="font-medium text-cyan-600">
                    {filters.district}
                  </span>
                </span>
              )}
              {totalPages > 1 && !loading && (
                <span className="ml-2 text-gray-400">
                  (Page {currentPage} of {totalPages})
                </span>
              )}
            </p>
            {loading && (
              <div className="flex items-center gap-1.5 ml-2">
                <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce delay-150"></div>
              </div>
            )}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-red-500 hover:text-red-600 font-medium transition-colors cursor-pointer hidden sm:block"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Main layout: sidebar + product grid */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Product grid, loading, or no results */}
          <div className="flex-1 min-w-0">
            {error ? (
              <div className="bg-red-50 p-6 rounded-3xl border border-red-100 text-center my-10">
                <p className="text-red-600 font-medium mb-2">Error connecting to server</p>
                <p className="text-sm text-red-400">{error}</p>
                <Button variant="primary" className="mt-4" onClick={() => window.location.reload()}>
                  Retry Connection
                </Button>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-300 ${loading ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} onClick={setSelectedProduct} />
                  ))}
                </div>

                {/* Pagination component */}
                {!loading && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                )}
              </>
            ) : !loading ? (
              /* No Results Found */
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  No products found
                </h3>
                <p className="text-sm text-gray-400 mb-5 max-w-xs">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              /* Initial Loading Placeholder */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-3xl h-64 animate-pulse border border-gray-100"></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Product Details Custom Dialog */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

