const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
    },
    product_name: {
        type: String,
    },
    lead_time: {
        type: String,
    },
    weight_gsm: {
        type: String,
    },
    quantity: {
        type: String,
    },
    price_rs: {
        type: String,
    },
    buyer_name: {
        type: String,
    },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
