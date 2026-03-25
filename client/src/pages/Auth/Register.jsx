import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/Common/Navbar';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await register(formData.name, formData.email, formData.password, formData.role);
    if (result.success) {
      navigate('/marketplace');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join FilterWorld</h1>
            <p className="text-gray-500">Create an account to start trading</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="e.g. user@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'user' })}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    formData.role === 'user'
                      ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-200'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-cyan-300'
                  }`}
                >
                  I want to Buy
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'seller' })}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    formData.role === 'seller'
                      ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-200'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-cyan-300'
                  }`}
                >
                  I want to Sell
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-500 text-sm rounded-xl border border-red-100 italic">
                {error}
              </div>
            )}

            <Button variant="primary" type="submit" className="w-full py-4 text-lg">
              Create Account
            </Button>
          </form>

          <p className="text-center mt-8 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-600 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
