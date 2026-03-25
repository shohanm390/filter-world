import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Common/Navbar';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Data states
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [usersList, setUsersList] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    fetchData();
  }, [user, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === 'overview') {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/stats`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) setStats(data.data);
        else throw new Error(data.message);
      } else if (activeTab === 'ads') {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products?limit=1000`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) setProducts(data.data);
        else throw new Error(data.message);
      } else if (activeTab === 'users') {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
           headers: { 'Authorization': `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) setUsersList(data.data);
        else throw new Error(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('ADMIN ACTION: Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (res.ok) {
        setProducts(products.filter(p => p._id !== id));
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('ADMIN ACTION: Are you sure you want to delete this user? All their products will be permanently removed!')) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/users/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (res.ok) {
        setUsersList(usersList.filter(u => u._id !== id));
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 shrink-0 hidden md:block">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-sm sticky top-24">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-4 mb-4">Master Admin</h2>
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('ads')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'ads' ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Manage Ads
              </button>
              <button 
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${activeTab === 'users' ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Users Listing
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeTab === 'overview' && 'Platform Overview'}
              {activeTab === 'ads' && 'Manage All Ads'}
              {activeTab === 'users' && 'User Management'}
            </h1>
            <p className="text-gray-500 mt-1">
              {activeTab === 'overview' && 'Real-time statistics and platform health.'}
              {activeTab === 'ads' && 'Monitor and moderate all listings across the marketplace.'}
              {activeTab === 'users' && 'View and manage registered buyers and sellers.'}
            </p>
          </div>

          {loading ? (
             <div className="text-center py-20 text-cyan-600 animate-pulse text-lg font-bold flex flex-col items-center gap-4">
                 <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                 </svg>
                 Syncing Database...
             </div>
          ) : error ? (
            <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-center gap-4 text-red-600 mb-8 shadow-sm">
              <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="font-semibold">{error}</div>
            </div>
          ) : (
            <div className="animate-fade-in">
              {/* --- OVERVIEW TAB --- */}
              {activeTab === 'overview' && stats && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Users</p>
                      <p className="text-4xl font-black text-gray-900 mt-2">{stats.totalUsers}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        <span>Platform Growing</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Vendors</p>
                      <p className="text-4xl font-black text-cyan-600 mt-2">{stats.sellersCount}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-500">
                        <span>{((stats.sellersCount / stats.totalUsers) * 100).toFixed(0)}% of user base</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Live Ads</p>
                      <p className="text-4xl font-black text-gray-900 mt-2">{stats.totalProducts}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-500">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>System Healthy</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Breakdown */}
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                       <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                       Category Distribution
                    </h3>
                    <div className="space-y-4">
                      {stats.categoryStats.map(cat => (
                        <div key={cat._id}>
                          <div className="flex justify-between text-sm font-semibold mb-1">
                            <span className="text-gray-700">{cat._id}</span>
                            <span className="text-gray-500">{cat.count} listings</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: `${Math.min((cat.count / stats.totalProducts) * 100, 100)}%` }}></div>
                          </div>
                        </div>
                      ))}
                      {stats.categoryStats.length === 0 && (
                         <p className="text-gray-500 italic text-sm">No products found to distribute.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* --- ADS TAB --- */}
              {activeTab === 'ads' && (
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                      <thead className="bg-gray-50/80 border-b border-gray-100 backdrop-blur-sm">
                        <tr>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Product & ID</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Seller Name</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Price</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Control</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {products.map((product) => (
                          <tr key={product._id} className="hover:bg-cyan-50/30 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <img src={product.thumbnail} alt={product.title} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-100 group-hover:ring-cyan-200 transition-all" />
                                <div>
                                  <p className="font-bold text-gray-900 leading-tight">{product.title}</p>
                                  <p className="text-[10px] text-gray-400 font-mono mt-1">{product._id}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-700">{product.seller?.name || 'Unknown User'}</span>
                                <span className="text-[11px] text-gray-400 mt-0.5">{product.seller?.email}</span>
                               </div>
                            </td>
                            <td className="px-6 py-4 font-black text-gray-900">
                              ৳{product.price.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-center">
                               <span className="px-3 py-1.5 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider rounded-xl border border-green-100">Live</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <Link to={`/dashboard/seller/edit/${product._id}`} className="p-2.5 bg-gray-50 text-gray-500 rounded-xl hover:bg-cyan-600 hover:text-white transition-all shadow-sm">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </Link>
                                <button onClick={() => handleDeleteProduct(product._id)} className="p-2.5 bg-gray-50 text-gray-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm cursor-pointer">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {products.length === 0 && (
                          <tr>
                            <td colSpan="5" className="px-6 py-12 text-center text-gray-500 font-semibold">No products found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* --- USERS TAB --- */}
              {activeTab === 'users' && (
                 <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                      <thead className="bg-gray-50/80 border-b border-gray-100 backdrop-blur-sm">
                        <tr>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">User Details</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Role</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Joined</th>
                          <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {usersList.map((u) => (
                          <tr key={u._id} className="hover:bg-cyan-50/30 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-black text-lg shadow-inner">
                                  {u.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 leading-tight">{u.name}</p>
                                  <p className="text-xs text-gray-500 mt-1">{u.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                               <span className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-xl border ${u.role === 'admin' ? 'bg-purple-50 text-purple-600 border-purple-100' : u.role === 'seller' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                                 {u.role}
                               </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-600">
                               {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {u._id !== user._id ? (
                                <button onClick={() => handleDeleteUser(u._id)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white rounded-xl text-xs font-bold transition-all border border-red-100 shadow-sm cursor-pointer">
                                  Remove User
                                </button>
                              ) : (
                                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-xl border border-cyan-100">Current Session</span>
                              )}
                            </td>
                          </tr>
                        ))}
                        {usersList.length === 0 && (
                           <tr>
                            <td colSpan="4" className="px-6 py-12 text-center text-gray-500 font-semibold">No users found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
