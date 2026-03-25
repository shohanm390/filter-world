/**
 * Mock product data — 20 items across various categories and districts
 */
const mockProducts = [
  {
      "id": 1,
      "title": "Samsung Galaxy S24 Ultra",
      "price": 125000,
      "category": "Mobile Phones",
      "condition": "new",
      "rating": 4.8,
      "thumbnail": "https://placehold.co/400x300/0891b2/ffffff?text=Galaxy+S24",
      "location": { "district": "Dhaka", "area": "Gulshan" },
      "createdAt": "2026-03-20T10:00:00Z"
    },
    {
      "id": 2,
      "title": "iPhone 15 Pro Max",
      "price": 135000,
      "category": "Mobile Phones",
      "condition": "new",
      "rating": 4.9,
      "thumbnail": "https://placehold.co/400x300/1d4ed8/ffffff?text=iPhone+15",
      "location": { "district": "Chattogram", "area": "Agrabad" },
      "createdAt": "2026-03-19T09:00:00Z"
    },
    {
      "id": 3,
      "title": "Dell XPS 13 Laptop",
      "price": 110000,
      "category": "Electronics",
      "condition": "used",
      "rating": 4.6,
      "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Dell+XPS",
      "location": { "district": "Sylhet", "area": "Zindabazar" },
      "createdAt": "2026-03-18T08:00:00Z"
    },
    {
      "id": 4,
      "title": "Men's Casual Shirt",
      "price": 1200,
      "category": "Clothing",
      "condition": "new",
      "rating": 4.2,
      "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Shirt",
      "location": { "district": "Rajshahi", "area": "Shaheb Bazar" },
      "createdAt": "2026-03-17T07:00:00Z"
    },
    {
      "id": 5,
      "title": "Wooden Dining Table",
      "price": 25000,
      "category": "Home & Garden",
      "condition": "used",
      "rating": 4.4,
      "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Table",
      "location": { "district": "Khulna", "area": "Sonadanga" },
      "createdAt": "2026-03-16T06:00:00Z"
    },

    {
      "id": 6,
      "title": "Honda CBR 150R",
      "price": 280000,
      "category": "Vehicles",
      "condition": "used",
      "rating": 4.6,
      "thumbnail": "https://placehold.co/400x300/d97706/ffffff?text=Bike",
      "location": { "district": "Bogura", "area": "Sadar" },
      "createdAt": "2026-03-15T05:00:00Z"
    },
    {
      "id": 7,
      "title": "SSC Book Set",
      "price": 1500,
      "category": "Books & Education",
      "condition": "new",
      "rating": 4.3,
      "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Books",
      "location": { "district": "Comilla", "area": "Town Hall" },
      "createdAt": "2026-03-14T04:00:00Z"
    },
    {
      "id": 8,
      "title": "Professional Football",
      "price": 1200,
      "category": "Sports & Outdoors",
      "condition": "new",
      "rating": 4.1,
      "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Football",
      "location": { "district": "Rangpur", "area": "City Center" },
      "createdAt": "2026-03-13T03:00:00Z"
    },
    {
      "id": 9,
      "title": "Face Wash Cleanser",
      "price": 500,
      "category": "Health & Beauty",
      "condition": "new",
      "rating": 4.0,
      "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Facewash",
      "location": { "district": "Mymensingh", "area": "Sadar" },
      "createdAt": "2026-03-12T02:00:00Z"
    },

    {
      "id": 10,
      "title": "LG Smart TV 55 Inch",
      "price": 70000,
      "category": "Electronics",
      "condition": "new",
      "rating": 4.7,
      "thumbnail": "https://placehold.co/400x300/1f2937/ffffff?text=TV",
      "location": { "district": "Barishal", "area": "Sadar" },
      "createdAt": "2026-03-11T01:00:00Z"
  },
  {
    "id": 11,
    "title": "HP Pavilion Laptop",
    "price": 85000,
    "category": "Electronics",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/334155/ffffff?text=HP+Laptop",
    "location": { "district": "Feni", "area": "Sadar" },
    "createdAt": "2026-03-10T10:00:00Z"
  },
  {
    "id": 12,
    "title": "Women's Saree",
    "price": 3500,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/be185d/ffffff?text=Saree",
    "location": { "district": "Pabna", "area": "Town" },
    "createdAt": "2026-03-10T09:00:00Z"
  },
  {
    "id": 13,
    "title": "Office Desk",
    "price": 12000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/78350f/ffffff?text=Desk",
    "location": { "district": "Naogaon", "area": "Sadar" },
    "createdAt": "2026-03-10T08:00:00Z"
  },
  {
    "id": 14,
    "title": "Yamaha R15 Bike",
    "price": 300000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.7,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Bike",
    "location": { "district": "Jessore", "area": "City Center" },
    "createdAt": "2026-03-10T07:00:00Z"
  },
  {
    "id": 15,
    "title": "HSC Guide Book",
    "price": 800,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Guide",
    "location": { "district": "Kushtia", "area": "Sadar" },
    "createdAt": "2026-03-10T06:00:00Z"
  },

  {
    "id": 16,
    "title": "Cricket Bat Premium",
    "price": 5000,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/15803d/ffffff?text=Bat",
    "location": { "district": "Sirajganj", "area": "Market" },
    "createdAt": "2026-03-10T05:00:00Z"
  },
  {
    "id": 17,
    "title": "Hair Dryer",
    "price": 1500,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Dryer",
    "location": { "district": "Narsingdi", "area": "Town" },
    "createdAt": "2026-03-10T04:00:00Z"
  },
  {
    "id": 18,
    "title": "Realme 12 Pro",
    "price": 30000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Realme",
    "location": { "district": "Tangail", "area": "Sadar" },
    "createdAt": "2026-03-10T03:00:00Z"
  },

  {
    "id": 19,
    "title": "Sony Headphones",
    "price": 7000,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.7,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Headphone",
    "location": { "district": "Gazipur", "area": "Board Bazar" },
    "createdAt": "2026-03-10T02:00:00Z"
  },
  {
    "id": 20,
    "title": "Men's T-Shirt",
    "price": 800,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Tshirt",
    "location": { "district": "Lakshmipur", "area": "Town" },
    "createdAt": "2026-03-10T01:00:00Z"
  },

  {
    "id": 21,
    "title": "Sofa Set 5 Seater",
    "price": 45000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Sofa",
    "location": { "district": "Narayanganj", "area": "Chashara" },
    "createdAt": "2026-03-09T10:00:00Z"
  },
  {
    "id": 22,
    "title": "Toyota Corolla 2015",
    "price": 1500000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/374151/ffffff?text=Car",
    "location": { "district": "Cumilla", "area": "City Center" },
    "createdAt": "2026-03-09T09:00:00Z"
  },
  {
    "id": 23,
    "title": "English Grammar Book",
    "price": 400,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Grammar",
    "location": { "district": "Dinajpur", "area": "Sadar" },
    "createdAt": "2026-03-09T08:00:00Z"
  },
  {
    "id": 24,
    "title": "Gym Dumbbells Set",
    "price": 3500,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Dumbbell",
    "location": { "district": "Madaripur", "area": "Market" },
    "createdAt": "2026-03-09T07:00:00Z"
  },

  {
    "id": 25,
    "title": "Perfume Set",
    "price": 2000,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Perfume",
    "location": { "district": "Sherpur", "area": "Town" },
    "createdAt": "2026-03-09T06:00:00Z"
  },
  {
    "id": 26,
    "title": "Walton Refrigerator",
    "price": 22000,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Fridge",
    "location": { "district": "Patuakhali", "area": "Sadar" },
    "createdAt": "2026-03-09T05:00:00Z"
  },
  {
    "id": 27,
    "title": "Bajaj Pulsar 150",
    "price": 180000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Pulsar",
    "location": { "district": "Jhenaidah", "area": "Town" },
    "createdAt": "2026-03-09T04:00:00Z"
  },
  {
    "id": 28,
    "title": "Math Solution Book",
    "price": 600,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Math",
    "location": { "district": "Joypurhat", "area": "Sadar" },
    "createdAt": "2026-03-09T03:00:00Z"
  },
  {
    "id": 29,
    "title": "Badminton Racket Set",
    "price": 1800,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Racket",
    "location": { "district": "Kurigram", "area": "Market" },
    "createdAt": "2026-03-09T02:00:00Z"
  },
  {
    "id": 30,
    "title": "Skin Care Cream",
    "price": 900,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Cream",
    "location": { "district": "Meherpur", "area": "Town" },
    "createdAt": "2026-03-09T01:00:00Z"
  },

  {
    "id": 31,
    "title": "Oppo Reno 11",
    "price": 38000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Oppo",
    "location": { "district": "Noakhali", "area": "Sadar" },
    "createdAt": "2026-03-08T10:00:00Z"
  },
  {
    "id": 32,
    "title": "Asus Gaming Laptop",
    "price": 120000,
    "category": "Electronics",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Asus",
    "location": { "district": "Rangamati", "area": "Town" },
    "createdAt": "2026-03-08T09:00:00Z"
  },
  {
    "id": 33,
    "title": "Women's Handbag",
    "price": 2200,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/a21caf/ffffff?text=Bag",
    "location": { "district": "Satkhira", "area": "Market" },
    "createdAt": "2026-03-08T08:00:00Z"
  },
  {
    "id": 34,
    "title": "Dining Chair Set",
    "price": 8000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Chair",
    "location": { "district": "Shariatpur", "area": "Sadar" },
    "createdAt": "2026-03-08T07:00:00Z"
  },
  {
    "id": 35,
    "title": "Nissan Sunny 2014",
    "price": 1100000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/374151/ffffff?text=Nissan",
    "location": { "district": "Sunamganj", "area": "Town" },
    "createdAt": "2026-03-08T06:00:00Z"
  },

  {
    "id": 36,
    "title": "Physics Guide Book",
    "price": 700,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Physics",
    "location": { "district": "Habiganj", "area": "Sadar" },
    "createdAt": "2026-03-08T05:00:00Z"
  },
  {
    "id": 37,
    "title": "Yoga Mat",
    "price": 1200,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Yoga",
    "location": { "district": "Netrokona", "area": "Market" },
    "createdAt": "2026-03-08T04:00:00Z"
  },
  {
    "id": 38,
    "title": "Hair Straightener",
    "price": 1800,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Straightener",
    "location": { "district": "Nilphamari", "area": "Town" },
    "createdAt": "2026-03-08T03:00:00Z"
  },
  {
    "id": 39,
    "title": "Vivo V29",
    "price": 32000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Vivo",
    "location": { "district": "Panchagarh", "area": "Sadar" },
    "createdAt": "2026-03-08T02:00:00Z"
  },
  {
    "id": 40,
    "title": "Bluetooth Speaker JBL",
    "price": 5000,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=JBL",
    "location": { "district": "Pirojpur", "area": "Market" },
    "createdAt": "2026-03-08T01:00:00Z"
  },

  {
    "id": 41,
    "title": "Men's Hoodie",
    "price": 1800,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Hoodie",
    "location": { "district": "Rajbari", "area": "Town" },
    "createdAt": "2026-03-07T10:00:00Z"
  },
  {
    "id": 42,
    "title": "Wardrobe Cabinet",
    "price": 20000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Wardrobe",
    "location": { "district": "Bagerhat", "area": "Sadar" },
    "createdAt": "2026-03-07T09:00:00Z"
  },
  {
    "id": 43,
    "title": "Suzuki Gixxer",
    "price": 220000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Gixxer",
    "location": { "district": "Bandarban", "area": "Town" },
    "createdAt": "2026-03-07T08:00:00Z"
  },
  {
    "id": 44,
    "title": "ICT Book",
    "price": 500,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=ICT",
    "location": { "district": "Barguna", "area": "Sadar" },
    "createdAt": "2026-03-07T07:00:00Z"
  },
  {
    "id": 45,
    "title": "Tennis Racket",
    "price": 2500,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Tennis",
    "location": { "district": "Bhola", "area": "Market" },
    "createdAt": "2026-03-07T06:00:00Z"
  },

  {
    "id": 46,
    "title": "Body Lotion",
    "price": 700,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Lotion",
    "location": { "district": "Brahmanbaria", "area": "Town" },
    "createdAt": "2026-03-07T05:00:00Z"
  },
  {
    "id": 47,
    "title": "Xiaomi Redmi Note 12",
    "price": 20000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Redmi",
    "location": { "district": "Chandpur", "area": "Sadar" },
    "createdAt": "2026-03-07T04:00:00Z"
  },
  {
    "id": 48,
    "title": "Lenovo ThinkPad",
    "price": 65000,
    "category": "Electronics",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=ThinkPad",
    "location": { "district": "Chapainawabganj", "area": "Town" },
    "createdAt": "2026-03-07T03:00:00Z"
  },
  {
    "id": 49,
    "title": "Women's Shoes",
    "price": 2200,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Shoes",
    "location": { "district": "Chuadanga", "area": "Market" },
    "createdAt": "2026-03-07T02:00:00Z"
  },
  {
    "id": 50,
    "title": "Microwave Oven",
    "price": 12000,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Oven",
    "location": { "district": "Cox's Bazar", "area": "Sadar" },
    "createdAt": "2026-03-07T01:00:00Z"
  },
  {
    "id": 51,
    "title": "Walton Air Conditioner",
    "price": 45000,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=AC",
    "location": { "district": "Faridpur", "area": "Sadar" },
    "createdAt": "2026-03-06T10:00:00Z"
  },
  {
    "id": 52,
    "title": "Men's Formal Shirt",
    "price": 1500,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Formal",
    "location": { "district": "Gaibandha", "area": "Town" },
    "createdAt": "2026-03-06T09:00:00Z"
  },
  {
    "id": 53,
    "title": "Wooden Bookshelf",
    "price": 8000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Shelf",
    "location": { "district": "Gopalganj", "area": "Market" },
    "createdAt": "2026-03-06T08:00:00Z"
  },
  {
    "id": 54,
    "title": "Hero Splendor Plus",
    "price": 90000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Bike",
    "location": { "district": "Jamalpur", "area": "Sadar" },
    "createdAt": "2026-03-06T07:00:00Z"
  },
  {
    "id": 55,
    "title": "Bangla Literature Book",
    "price": 400,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Literature",
    "location": { "district": "Jashore", "area": "Town" },
    "createdAt": "2026-03-06T06:00:00Z"
  },

  {
    "id": 56,
    "title": "Gym Treadmill",
    "price": 30000,
    "category": "Sports & Outdoors",
    "condition": "used",
    "rating": 4.5,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Treadmill",
    "location": { "district": "Jhalokati", "area": "Market" },
    "createdAt": "2026-03-06T05:00:00Z"
  },
  {
    "id": 57,
    "title": "Hair Oil",
    "price": 300,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Oil",
    "location": { "district": "Khagrachhari", "area": "Town" },
    "createdAt": "2026-03-06T04:00:00Z"
  },
  {
    "id": 58,
    "title": "Samsung Galaxy A54",
    "price": 40000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/0891b2/ffffff?text=Galaxy+A54",
    "location": { "district": "Kishoreganj", "area": "Sadar" },
    "createdAt": "2026-03-06T03:00:00Z"
  },

  {
    "id": 59,
    "title": "Canon DSLR Camera",
    "price": 55000,
    "category": "Electronics",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Camera",
    "location": { "district": "Lalmonirhat", "area": "Town" },
    "createdAt": "2026-03-06T02:00:00Z"
  },
  {
    "id": 60,
    "title": "Women's Kurti",
    "price": 1800,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/a21caf/ffffff?text=Kurti",
    "location": { "district": "Magura", "area": "Market" },
    "createdAt": "2026-03-06T01:00:00Z"
  },

  {
    "id": 61,
    "title": "Dining Table Set",
    "price": 35000,
    "category": "Home & Garden",
    "condition": "used",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/92400e/ffffff?text=Dining",
    "location": { "district": "Manikganj", "area": "Sadar" },
    "createdAt": "2026-03-05T10:00:00Z"
  },
  {
    "id": 62,
    "title": "Toyota Premio 2016",
    "price": 1800000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.7,
    "thumbnail": "https://placehold.co/400x300/374151/ffffff?text=Premio",
    "location": { "district": "Munshiganj", "area": "Town" },
    "createdAt": "2026-03-05T09:00:00Z"
  },
  {
    "id": 63,
    "title": "Chemistry Guide",
    "price": 650,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Chemistry",
    "location": { "district": "Moulvibazar", "area": "Market" },
    "createdAt": "2026-03-05T08:00:00Z"
  },
  {
    "id": 64,
    "title": "Cycling Helmet",
    "price": 1200,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Helmet",
    "location": { "district": "Narail", "area": "Town" },
    "createdAt": "2026-03-05T07:00:00Z"
  },
  {
    "id": 65,
    "title": "Face Serum",
    "price": 1100,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Serum",
    "location": { "district": "Natore", "area": "Sadar" },
    "createdAt": "2026-03-05T06:00:00Z"
  },

  {
    "id": 66,
    "title": "Infinix Note 40",
    "price": 18000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Infinix",
    "location": { "district": "Nawabganj", "area": "Town" },
    "createdAt": "2026-03-05T05:00:00Z"
  },
  {
    "id": 67,
    "title": "HP Printer",
    "price": 9000,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Printer",
    "location": { "district": "Netrokona", "area": "Market" },
    "createdAt": "2026-03-05T04:00:00Z"
  },
  {
    "id": 68,
    "title": "Men's Jeans",
    "price": 2000,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Jeans",
    "location": { "district": "Nilphamari", "area": "Town" },
    "createdAt": "2026-03-05T03:00:00Z"
  },
  {
    "id": 69,
    "title": "Gas Stove",
    "price": 4000,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Stove",
    "location": { "district": "Pabna", "area": "Sadar" },
    "createdAt": "2026-03-05T02:00:00Z"
  },
  {
    "id": 70,
    "title": "TVS Apache RTR",
    "price": 250000,
    "category": "Vehicles",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Apache",
    "location": { "district": "Panchagarh", "area": "Town" },
    "createdAt": "2026-03-05T01:00:00Z"
  },

  {
    "id": 71,
    "title": "Biology Book",
    "price": 500,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Biology",
    "location": { "district": "Rajshahi", "area": "Sadar" },
    "createdAt": "2026-03-04T10:00:00Z"
  },
  {
    "id": 72,
    "title": "Skipping Rope",
    "price": 300,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Rope",
    "location": { "district": "Rangpur", "area": "Market" },
    "createdAt": "2026-03-04T09:00:00Z"
  },
  {
    "id": 73,
    "title": "Lipstick Set",
    "price": 900,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Lipstick",
    "location": { "district": "Satkhira", "area": "Town" },
    "createdAt": "2026-03-04T08:00:00Z"
  },
  {
    "id": 74,
    "title": "iPhone 13",
    "price": 75000,
    "category": "Mobile Phones",
    "condition": "used",
    "rating": 4.6,
    "thumbnail": "https://placehold.co/400x300/1d4ed8/ffffff?text=iPhone13",
    "location": { "district": "Shariatpur", "area": "Sadar" },
    "createdAt": "2026-03-04T07:00:00Z"
  },
  {
    "id": 75,
    "title": "LED Monitor 24 Inch",
    "price": 15000,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Monitor",
    "location": { "district": "Sherpur", "area": "Town" },
    "createdAt": "2026-03-04T06:00:00Z"
  },

  {
    "id": 76,
    "title": "Women's Scarf",
    "price": 600,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/a21caf/ffffff?text=Scarf",
    "location": { "district": "Sirajganj", "area": "Market" },
    "createdAt": "2026-03-04T05:00:00Z"
  },
  {
    "id": 77,
    "title": "Electric Kettle",
    "price": 2000,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Kettle",
    "location": { "district": "Sunamganj", "area": "Town" },
    "createdAt": "2026-03-04T04:00:00Z"
  },
  {
    "id": 78,
    "title": "Motorbike Helmet",
    "price": 1500,
    "category": "Vehicles",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Helmet",
    "location": { "district": "Sylhet", "area": "Sadar" },
    "createdAt": "2026-03-04T03:00:00Z"
  },
  {
    "id": 79,
    "title": "English Dictionary",
    "price": 700,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Dictionary",
    "location": { "district": "Tangail", "area": "Market" },
    "createdAt": "2026-03-04T02:00:00Z"
  },
  {
    "id": 80,
    "title": "Push Up Bar",
    "price": 800,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Pushup",
    "location": { "district": "Bagerhat", "area": "Town" },
    "createdAt": "2026-03-04T01:00:00Z"
  },

  {
    "id": 81,
    "title": "Face Mask Pack",
    "price": 500,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Mask",
    "location": { "district": "Bandarban", "area": "Market" },
    "createdAt": "2026-03-03T10:00:00Z"
  },
  {
    "id": 82,
    "title": "OnePlus Nord CE",
    "price": 32000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=OnePlus",
    "location": { "district": "Barguna", "area": "Town" },
    "createdAt": "2026-03-03T09:00:00Z"
  },
  {
    "id": 83,
    "title": "Wireless Mouse",
    "price": 1200,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Mouse",
    "location": { "district": "Bhola", "area": "Sadar" },
    "createdAt": "2026-03-03T08:00:00Z"
  },
  {
    "id": 84,
    "title": "Men's Sandals",
    "price": 900,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Sandals",
    "location": { "district": "Bogura", "area": "Market" },
    "createdAt": "2026-03-03T07:00:00Z"
  },
  {
    "id": 85,
    "title": "Ceiling Fan",
    "price": 3500,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Fan",
    "location": { "district": "Brahmanbaria", "area": "Town" },
    "createdAt": "2026-03-03T06:00:00Z"
  },

  {
    "id": 86,
    "title": "Motorbike Gloves",
    "price": 1200,
    "category": "Vehicles",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/ea580c/ffffff?text=Gloves",
    "location": { "district": "Chandpur", "area": "Sadar" },
    "createdAt": "2026-03-03T05:00:00Z"
  },
  {
    "id": 87,
    "title": "General Knowledge Book",
    "price": 400,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=GK",
    "location": { "district": "Chapainawabganj", "area": "Town" },
    "createdAt": "2026-03-03T04:00:00Z"
  },
  {
    "id": 88,
    "title": "Basketball",
    "price": 1000,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Basketball",
    "location": { "district": "Chuadanga", "area": "Market" },
    "createdAt": "2026-03-03T03:00:00Z"
  },
  {
    "id": 89,
    "title": "Shampoo Bottle",
    "price": 600,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Shampoo",
    "location": { "district": "Comilla", "area": "Sadar" },
    "createdAt": "2026-03-03T02:00:00Z"
  },
  {
    "id": 90,
    "title": "Samsung Galaxy M14",
    "price": 18000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/0891b2/ffffff?text=Galaxy+M14",
    "location": { "district": "Cox's Bazar", "area": "Town" },
    "createdAt": "2026-03-03T01:00:00Z"
  },

  {
    "id": 91,
    "title": "Gaming Keyboard",
    "price": 2500,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.4,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=Keyboard",
    "location": { "district": "Dhaka", "area": "Mirpur" },
    "createdAt": "2026-03-02T10:00:00Z"
  },
  {
    "id": 92,
    "title": "Women's Abaya",
    "price": 3000,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/a21caf/ffffff?text=Abaya",
    "location": { "district": "Dinajpur", "area": "Sadar" },
    "createdAt": "2026-03-02T09:00:00Z"
  },
  {
    "id": 93,
    "title": "Rice Cooker",
    "price": 3500,
    "category": "Home & Garden",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/0ea5e9/ffffff?text=Cooker",
    "location": { "district": "Faridpur", "area": "Town" },
    "createdAt": "2026-03-02T08:00:00Z"
  },
  {
    "id": 94,
    "title": "Car Cover",
    "price": 2000,
    "category": "Vehicles",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/374151/ffffff?text=Cover",
    "location": { "district": "Feni", "area": "Market" },
    "createdAt": "2026-03-02T07:00:00Z"
  },
  {
    "id": 95,
    "title": "Math Practice Book",
    "price": 500,
    "category": "Books & Education",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/065f46/ffffff?text=Math",
    "location": { "district": "Gaibandha", "area": "Sadar" },
    "createdAt": "2026-03-02T06:00:00Z"
  },

  {
    "id": 96,
    "title": "Skipping Rope Pro",
    "price": 400,
    "category": "Sports & Outdoors",
    "condition": "new",
    "rating": 4.0,
    "thumbnail": "https://placehold.co/400x300/16a34a/ffffff?text=Rope",
    "location": { "district": "Gazipur", "area": "Board Bazar" },
    "createdAt": "2026-03-02T05:00:00Z"
  },
  {
    "id": 97,
    "title": "Face Cream",
    "price": 700,
    "category": "Health & Beauty",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/db2777/ffffff?text=Cream",
    "location": { "district": "Gopalganj", "area": "Town" },
    "createdAt": "2026-03-02T04:00:00Z"
  },
  {
    "id": 98,
    "title": "Vivo Y27",
    "price": 22000,
    "category": "Mobile Phones",
    "condition": "new",
    "rating": 4.2,
    "thumbnail": "https://placehold.co/400x300/f97316/ffffff?text=Vivo",
    "location": { "district": "Habiganj", "area": "Market" },
    "createdAt": "2026-03-02T03:00:00Z"
  },
  {
    "id": 99,
    "title": "USB Flash Drive 64GB",
    "price": 800,
    "category": "Electronics",
    "condition": "new",
    "rating": 4.1,
    "thumbnail": "https://placehold.co/400x300/111827/ffffff?text=USB",
    "location": { "district": "Jamalpur", "area": "Sadar" },
    "createdAt": "2026-03-02T02:00:00Z"
  },
  {
    "id": 100,
    "title": "Men's Jacket",
    "price": 3500,
    "category": "Clothing",
    "condition": "new",
    "rating": 4.3,
    "thumbnail": "https://placehold.co/400x300/7c3aed/ffffff?text=Jacket",
    "location": { "district": "Jashore", "area": "Town" },
    "createdAt": "2026-03-02T01:00:00Z"
  }

];

export default mockProducts;
