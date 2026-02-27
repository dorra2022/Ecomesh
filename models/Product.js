const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: String, 
        required: true, 
        enum: ['smart-pot', 'sensor', 'fertilizer', 'tool', 'other'] 
    },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String },
    specifications: { type: Object },
    rating: { type: Number, min: 0, max: 5 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;