import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { FilterProvider } from "./context/FilterContext";
import Marketplace from "./pages/Marketplace/Marketplace";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SellerDashboard from "./pages/Dashboard/SellerDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import ProductForm from "./pages/Dashboard/ProductForm";
import "./index.css";

/**
 * Protected Route Wrapper
 */
const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/marketplace" replace />;

  return children;
};

/**
 * App root — wraps context providers and handles routing
 */
export default function App() {
  return (
    <AuthProvider>
      <FilterProvider>
        <Router>
          <Routes>
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Seller Routes */}
            <Route path="/dashboard/seller" element={
              <ProtectedRoute roles={['seller']}>
                <SellerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/seller/add" element={
              <ProtectedRoute roles={['seller', 'admin']}>
                <ProductForm />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/seller/edit/:id" element={
              <ProtectedRoute roles={['seller', 'admin']}>
                <ProductForm />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/dashboard/admin" element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />

            <Route path="/" element={<Navigate to="/marketplace" replace />} />
          </Routes>
        </Router>
      </FilterProvider>
    </AuthProvider>
  );
}
