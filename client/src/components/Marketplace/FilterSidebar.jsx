import { useFilterContext } from "../../context/FilterContext";
import { Select } from "../Common/Input";
import Button from "../Common/Button";
import districts from "../../data/districts";
import categories from "../../data/categories";

/**
 * FilterSidebar — Desktop sidebar / Mobile drawer for all filter controls
 * Props:
 *   isOpen — controls mobile drawer visibility
 *   onClose — callback to close mobile drawer
 */
export default function FilterSidebar({ isOpen, onClose }) {
  const { filters, updateFilter, clearFilters, hasActiveFilters } =
    useFilterContext();

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </h2>

        {/* Clear all */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-medium text-red-500 hover:text-red-600 transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category filter */}
      <Select
        label="Category"
        value={filters.category}
        onChange={(e) => updateFilter("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>

      {/* District filter */}
      <Select
        label="District"
        value={filters.district}
        onChange={(e) => updateFilter("district", e.target.value)}
      >
        <option value="">All Districts</option>
        {districts.map((dist) => (
          <option key={dist} value={dist}>
            {dist}
          </option>
        ))}
      </Select>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Price Range (BDT)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange[0]}
            onChange={(e) =>
              updateFilter("priceRange", [
                e.target.value,
                filters.priceRange[1],
              ])
            }
            className="w-full px-3 py-2.5 rounded-2xl border border-gray-200 bg-white text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
          />
          <span className="text-gray-400 text-sm">—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange[1]}
            onChange={(e) =>
              updateFilter("priceRange", [
                filters.priceRange[0],
                e.target.value,
              ])
            }
            className="w-full px-3 py-2.5 rounded-2xl border border-gray-200 bg-white text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
          />
        </div>
      </div>

      {/* Sort */}
      <Select
        label="Sort By"
        value={filters.sortBy}
        onChange={(e) => updateFilter("sortBy", e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
      </Select>

      {/* Clear button — large, always visible */}
      {hasActiveFilters && (
        <Button variant="secondary" className="w-full" onClick={clearFilters}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar — always visible on md+ */}
      <aside className="hidden md:block w-72 shrink-0">
        <div className="sticky top-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl p-5 overflow-y-auto animate-slide-in">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
