/**
 * Button — Reusable button component
 * Variants: primary, secondary, ghost
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-200 cursor-pointer text-sm px-4 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 shadow-sm shadow-cyan-200",
    secondary:
      "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 active:bg-cyan-200",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
