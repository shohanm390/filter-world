import { useEffect } from 'react';
import Button from '../Common/Button';

export default function ProductModal({ product, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row transform transition-all animate-slide-in">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-gray-100 backdrop-blur-sm rounded-full text-gray-500 transition-colors shadow-sm cursor-pointer">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 relative bg-gray-100 flex items-center justify-center shrink-0 min-h-[300px] md:min-h-full">
            <img src={product.thumbnail} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider backdrop-blur-md border border-white/20 ${product.condition === 'new' ? 'bg-emerald-500/80 text-white' : 'bg-amber-500/80 text-white'}`}>
                    {product.condition}
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/20">
                    {product.category}
                </span>
            </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col bg-white overflow-y-auto w-full">
            <div className="p-8 lg:p-10 flex-1">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-500 mb-3">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {product.rating} Rating ({product.numReviews} Reviews)
                </div>
                
                <h2 className="text-3xl font-black text-gray-900 leading-tight mb-2" id="modal-title">{product.title}</h2>
                <div className="text-gray-400 text-sm font-medium flex items-center gap-1.5 mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {product.location.area}, {product.location.district}
                </div>

                <div className="text-4xl font-black text-cyan-600 mb-8">
                    ৳{product.price.toLocaleString()}
                </div>

                {/* Seller Profile Mini */}
                <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100 flex items-center gap-4 mb-8">
                     <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-black text-2xl shadow-inner shrink-0">
                        {product.seller?.name?.[0] || 'S'}
                     </div>
                     <div className="flex-1 min-w-0">
                         <p className="font-bold text-gray-900 text-lg truncate">{product.seller?.name || 'Top Vendor'}</p>
                         <p className="text-gray-500 flex items-center gap-1.5 text-sm truncate">
                             <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             {product.seller?.email || 'vendor@example.com'}
                         </p>
                     </div>
                     <div className="bg-green-100 text-green-700 p-2 rounded-xl" title="Verified Seller">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                </div>

                {/* Description placeholder if your schema had it, else empty or generic text */}
                <div className="prose prose-sm text-gray-600">
                    <h3 className="text-gray-900 font-bold mb-2">Description</h3>
                    <p>
                        This is an official listing on the FilterWorld marketplace. You are viewing a premium {product.condition} product located in {product.location.district}. Please contact the seller directly through the associated email to arrange payment and collection.
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 mt-auto">
                 <Button variant="primary" className="flex-1 py-4 text-base shadow-lg shadow-cyan-600/20" onClick={() => window.location.href=`mailto:${product.seller?.email}?subject=Interested in ${product.title}`}>
                    Contact Seller
                 </Button>
                 <Button variant="secondary" className="flex-1 py-4 text-base" onClick={onClose}>
                    Close Dialog
                 </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
