const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            trim: true,
            maxlength: [100, 'Title cannot be more than 100 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        category: {
            type: String,
            required: [true, 'Please add a category'],
        },
        condition: {
            type: String,
            enum: ['new', 'used'],
            required: [true, 'Please add a condition'],
        },
        thumbnail: {
            type: String,
            default: 'no-photo.jpg',
        },
        rating: {
            type: Number,
            default: 0,
        },
        numReviews: {
            type: Number,
            default: 0,
        },
        seller: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        location: {
            district: {
                type: String,
                required: [true, 'Please add a district'],
            },
            area: {
                type: String,
                required: [true, 'Please add an area'],
            },
        },
    },
    {
        timestamps: true,
    }
);

// Index for search functionality
productSchema.index({ title: 'text' });

module.exports = mongoose.model('Product', productSchema);
