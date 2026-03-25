import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Common/Navbar";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";

const categories = ["Electronics", "Vehicles", "Property", "Home & Garden", "Hobbies", "Clothing", "Health & Beauty", "Books & Education"];
const districts = [
    "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh",
    "Gazipur", "Narayanganj", "Cumilla", "Bogura", "Noakhali", "Cox's Bazar", "Jashore", "Tangail",
    "Brahmanbaria", "Dinajpur", "Pabna", "Jamalpur", "Feni", "Sirajganj", "Kushtia", "Faridpur"
];

export default function ProductForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "Electronics",
        condition: "new",
        district: "Dhaka",
        area: "",
        thumbnail: "https://placehold.co/400x300/1f2937/ffffff?text=Product",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEdit) {
            const fetchProduct = async () => {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setFormData({
                        title: data.data.title,
                        price: data.data.price,
                        category: data.data.category,
                        condition: data.data.condition,
                        district: data.data.location.district,
                        area: data.data.location.area,
                        thumbnail: data.data.thumbnail,
                    });
                }
            };
            fetchProduct();
        }
    }, [id, isEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            price: Number(formData.price),
            location: {
                district: formData.district,
                area: formData.area
            }
        };

        const url = isEdit 
            ? `${import.meta.env.VITE_API_URL}/products/${id}`
            : `${import.meta.env.VITE_API_URL}/products`;
        
        const method = isEdit ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                navigate(user.role === 'admin' ? '/dashboard/admin' : "/dashboard/seller");
            } else {
                const data = await res.json();
                alert(data.message);
            }
        } catch (err) {
            alert("Failed to save product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-10">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8">
                        {isEdit ? "Edit Product" : "Add New Product"}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Product Title"
                            placeholder="e.g. Sony A7 III Camera"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Price (BDT)"
                                type="number"
                                placeholder="0"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                required
                            />
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wider">Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-gray-700 transition-all font-medium appearance-none"
                                >
                                    {categories.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wider">Condition</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['new', 'used'].map((c) => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, condition: c })}
                                            className={`py-2 px-4 rounded-xl border text-sm font-bold capitalize transition-all ${
                                                formData.condition === c
                                                    ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-200'
                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-cyan-300'
                                            }`}
                                        >
                                            {c}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wider">District</label>
                                <select
                                    value={formData.district}
                                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-gray-700 transition-all font-medium appearance-none"
                                >
                                    {districts.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <Input
                            label="Area / Neighborhood"
                            placeholder="e.g. Dhanmondi 27"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            required
                        />

                        <Input
                            label="Image URL"
                            placeholder="https://..."
                            value={formData.thumbnail}
                            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                        />

                        <div className="pt-4 flex gap-4">
                            <Button
                                type="button"
                                variant="secondary"
                                className="flex-1"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-1"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : isEdit ? "Update Product" : "Publish Product"}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
