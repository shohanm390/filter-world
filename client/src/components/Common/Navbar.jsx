import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * Navbar — Top navigation bar with brand, auth, and mobile filter toggle
 */
export default function Navbar({ onToggleFilter }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/marketplace");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/marketplace" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
              FilterWorld
            </h1>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/marketplace" className="hover:text-cyan-600 transition-colors">Marketplace</Link>
            {user?.role === 'seller' && (
              <Link to="/dashboard/seller" className="hover:text-cyan-600 transition-colors">Seller Panel</Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/dashboard/admin" className="hover:text-cyan-600 transition-colors">Admin Panel</Link>
            )}
          </div>

          {/* Auth / User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-900">{user.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{user.role}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="px-5 py-2 rounded-xl bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 shadow-lg shadow-cyan-200 transition-all">
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile filter toggle */}
            {onToggleFilter && (
              <button
                onClick={onToggleFilter}
                className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
