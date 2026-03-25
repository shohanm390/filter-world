import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Common/Navbar';
import Button from '../../components/Common/Button';
import { Link } from 'react-router-dom';

export default function SellerDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products?seller=${user._id}&limit=1000`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) setProducts(data.data);
        else throw new Error(data.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchMyProducts();
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (res.ok) setProducts(products.filter(p => p._id !== id));
      else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  const totalValue = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Seller Hub</h1>
            <p className="text-gray-500 mt-1">Manage your storefront and live inventory.</p>
          </div>
          <Link to="/dashboard/seller/add">
            <Button variant="primary" className="flex items-center gap-2 px-6 shadow-lg shadow-cyan-600/20 w-full md:w-auto">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New Ad
            </Button>
          </Link>
        </div>

        {/* Stats Section */}
        {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                       <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                    </div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Listings</p>
                    <p className="text-4xl font-black text-gray-900 mt-2">{products.length}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                    </div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Value</p>
                    <p className="text-4xl font-black text-cyan-600 mt-2">৳{totalValue.toLocaleString()}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Store Rating</p>
                    <p className="text-4xl font-black text-amber-500 mt-2">4.9<span className="text-lg text-gray-400 font-bold">/5</span></p>
                </div>
            </div>
        )}

        {/* Listings Section */}
        {loading ? (
             <div className="text-center py-20 text-cyan-600 animate-pulse text-lg font-bold flex flex-col items-center gap-4">
                 <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                 </svg>
                 Loading Inventory...
             </div>
        ) : error ? (
           <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-center gap-4 text-red-600 shadow-sm">
              <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <div className="font-semibold">{error}</div>
           </div>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mb-4 text-cyan-500">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Your store is empty</h3>
            <p className="text-gray-500 mt-2 mb-6">Create your first ad to start selling</p>
            <Link to="/dashboard/seller/add">
                <Button variant="primary">Create First Ad</Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden animate-fade-in">
             <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                  <thead className="bg-gray-50/80 border-b border-gray-100 backdrop-blur-sm">
                    <tr>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Product Details</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Status & Condition</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Price</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Manage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {products.map((product) => (
                      <tr key={product._id} className="hover:bg-cyan-50/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img src={product.thumbnail} alt={product.title} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-gray-100 group-hover:ring-cyan-200 transition-all" />
                            <div>
                               <p className="font-bold text-gray-900 leading-tight">{product.title}</p>
                               <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-lg font-bold uppercase">{product.category}</span>
                                  <span className="text-[10px] text-gray-400 flex items-center gap-1">📍 {product.location.district}</span>
                               </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <div className="flex flex-col items-center gap-1.5">
                               <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider rounded-xl border border-green-100">Live Ad</span>
                               <span className={`text-[10px] font-bold uppercase ${product.condition==='new' ? 'text-emerald-500' : 'text-amber-500'}`}>{product.condition}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-black text-gray-900 text-lg">
                          ৳{product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            <Link to={`/dashboard/seller/edit/${product._id}`} className="p-2.5 bg-gray-50 text-gray-500 rounded-xl hover:bg-cyan-600 hover:text-white transition-all shadow-sm">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </Link>
                            <button onClick={() => handleDelete(product._id)} className="p-2.5 bg-gray-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm cursor-pointer">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
