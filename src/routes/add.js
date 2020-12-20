const Product = require('../models/product');

const prod = new Product({
    product_id: '102',
    product_name: 'Jacket',
    lead_time: '5',
    weight_gsm: '300',
    quantity: '6',
    price_rs: '500',
    buyer_name: 'Prince',
});

const a = async () => {
    try {
        const p = await prod.save();
        console.log('added', p);
    } catch (err) {
        console.log(err);
    }
};

a();
