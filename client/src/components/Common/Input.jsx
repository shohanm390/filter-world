/**
 * Input — Reusable input / select wrapper
 * Provides consistent styling across the app
 */
export default function Input({ label, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2.5 rounded-2xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
}

/**
 * Select — Reusable select wrapper with consistent styling
 */
export function Select({ label, children, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-2.5 rounded-2xl border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all duration-200 appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
