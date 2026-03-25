import axios from 'axios';

const API = axios.create({
    // ডেভেলপমেন্ট মোডে লোকালহোস্ট, প্রোডাকশনে রেন্ডার/ভার্সেল ইউআরএল
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export default API;