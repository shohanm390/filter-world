const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');

dotenv.config();

const districts = [
    "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh",
    "Gazipur", "Narayanganj", "Cumilla", "Bogura", "Noakhali", "Cox's Bazar", "Jashore", "Tangail",
    "Brahmanbaria", "Dinajpur", "Pabna", "Jamalpur", "Feni", "Sirajganj", "Kushtia", "Faridpur",
    "Magura", "Narsingdi", "Madaripur", "Gopalganj", "Rajbari", "Shariatpur", "Manikganj", "Munshiganj",
    "Chandpur", "Lakshmipur", "Bagerhat", "Chuadanga", "Satkhira", "Meherpur", "Jhenaidah", "Narail",
    "Kurigram", "Lalmonirhat", "Gaibandha", "Nilphamari", "Panchagarh", "Thakurgaon", "Joypurhat", "Naogaon",
    "Natore", "Chapainawabganj", "Habiganj", "Moulvibazar", "Sunamganj", "Netrokona", "Sherpur", "Bhola",
    "Pirojpur", "Jhalokathi", "Barguna", "Patuakhali", "Bandarban", "Rangamati", "Khagrachari"
];

const categories = ["Electronics", "Vehicles", "Property", "Home & Garden", "Hobbies", "Clothing", "Health & Beauty", "Books & Education"];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // Clear existing data
        await User.deleteMany();
        await Product.deleteMany();

        // Create Admin and Sellers
        const adminPassword = await bcrypt.hash('admin123', 10);
        const sellerPassword = await bcrypt.hash('seller123', 10);

        const adminUser = await User.create({
            name: 'Master Admin',
            email: 'admin@filterworld.com',
            password: 'admin123', // Model hook will hash it again if I save it normally, but here I'm using .create which triggers pre-save
            role: 'admin',
            isVerified: true
        });

        const sellerUser = await User.create({
            name: 'Top Seller',
            email: 'seller@filterworld.com',
            password: 'seller123',
            role: 'seller',
            isVerified: true
        });

        console.log('Users Seeded...');

        // Generate 100+ products
        const products = [];
        for (let i = 1; i <= 105; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const district = districts[Math.floor(Math.random() * districts.length)];
            const price = Math.floor(Math.random() * 50000) + 1000;
            const condition = Math.random() > 0.5 ? 'new' : 'used';

            products.push({
                title: `${category} Pro Item ${i}`,
                price: price,
                category: category,
                condition: condition,
                thumbnail: `https://placehold.co/400x300/1f2937/ffffff?text=${category}+${i}`,
                rating: (Math.random() * 5).toFixed(1),
                seller: sellerUser._id,
                location: {
                    district: district,
                    area: 'Central'
                }
            });
        }

        await Product.insertMany(products);
        console.log('100+ Products Seeded...');

        console.log('Seeding Complete');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
