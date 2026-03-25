/**
 * ProductCard — Displays a single product with image, info, and badges
 */
export default function ProductCard({ product, onClick }) {
  const { title, price, category, condition, rating, thumbnail, location, createdAt, seller } = product;

  // Format price in BDT
  const formattedPrice = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
  }).format(price);

  // Format relative time
  const timeAgo = getTimeAgo(createdAt);

  return (
    <div 
      onClick={() => onClick && onClick(product)} 
      className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[4/3] shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Condition badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider ${
            condition === "new"
              ? "bg-emerald-500 text-white"
              : "bg-amber-500 text-white"
          }`}
        >
          {condition}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                {category}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                <svg className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {rating}
            </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>

        {/* Price */}
        <p className="text-xl font-black text-gray-900 mt-2">{formattedPrice}</p>

        {/* Seller Info */}
        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
           <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-[10px] font-bold text-cyan-700">
                    {seller?.name?.[0] || 'S'}
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-700 leading-none">{seller?.name || 'Top Seller'}</span>
                    <span className="text-[9px] text-gray-400 mt-0.5 tracking-tight">{location.district}</span>
                </div>
           </div>
           <span className="text-[10px] text-gray-400 font-medium italic">{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}


/**
 * Simple relative time formatter
 */
function getTimeAgo(dateStr) {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now - then;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
}
