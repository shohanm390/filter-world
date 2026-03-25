const Product = require('../models/Product');

// @desc    Get all products (with filtering, sorting, pagination)
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        let query;

        // Copy req.query
        const reqQuery = { ...req.query };

        // Fields to exclude
        const removeFields = ['select', 'sort', 'page', 'limit', 'search'];

        // Loop over removeFields and delete them from reqQuery
        removeFields.forEach((param) => delete reqQuery[param]);

        // Create query string
        let queryStr = JSON.stringify(reqQuery);

        // Create operators ($gt, $gte, etc)
        queryStr = queryStr.replace(
            /\b(gt|gte|lt|lte|in)\b/g,
            (match) => `$${match}`
        );

        let finalQuery = JSON.parse(queryStr);

        // Explicitly handle simple minPrice and maxPrice query params
        if (req.query.minPrice !== undefined || req.query.maxPrice !== undefined) {
            finalQuery.price = {};
            if (req.query.minPrice !== undefined) {
                finalQuery.price.$gte = Number(req.query.minPrice);
            }
            if (req.query.maxPrice !== undefined) {
                finalQuery.price.$lte = Number(req.query.maxPrice);
            }
            delete finalQuery.minPrice;
            delete finalQuery.maxPrice;
        }

        // Advanced Search-as-you-type (Regex across Title, Category, Location)
        if (req.query.search) {
            const searchRegex = new RegExp(req.query.search, 'i');
            finalQuery = {
                ...finalQuery,
                $or: [
                    { title: searchRegex },
                    { category: searchRegex },
                    { 'location.district': searchRegex },
                    { 'location.area': searchRegex }
                ]
            };
        }

        // Get total BEFORE pagination but AFTER filtering
        const total = await Product.countDocuments(finalQuery);

        // Finding resource
        query = Product.find(finalQuery);

        // Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ');
            query = query.select(fields);
        }

        // Sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 9;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        query = query.skip(startIndex).limit(limit);

        // Executing query
        const products = await query.populate('seller', 'name email');

        // Pagination result
        const pagination = {};

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit,
            };
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit,
            };
        }

        res.status(200).json({
            success: true,
            count: products.length,
            total,
            pagination,
            data: products,
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate(
            'seller',
            'name email'
        );

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ success: true, data: product });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Seller/Admin)
const createProduct = async (req, res) => {
    try {
        // Add user to req.body
        req.body.seller = req.user.id;

        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            data: product,
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Owner/Admin)
const updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Make sure user is product owner
        if (
            product.seller.toString() !== req.user.id &&
            req.user.role !== 'admin'
        ) {
            return res.status(401).json({
                message: `User ${req.user.id} is not authorized to update this product`,
            });
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ success: true, data: product });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Owner/Admin)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Make sure user is product owner
        if (
            product.seller.toString() !== req.user.id &&
            req.user.role !== 'admin'
        ) {
            return res.status(401).json({
                message: `User ${req.user.id} is not authorized to delete this product`,
            });
        }

        await product.deleteOne();

        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
