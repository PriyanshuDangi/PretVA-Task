const express = require('express');
const Product = require('../models/product');

const router = new express.Router();

/**
 * @route   GET api/product?product_name=
 * @route   GET api/product?quantity=
 * @route   GET api/product?price_rs=
 * @route   GET api/product?lead_time=
 * @route   GET api/product?all=true
 * @route   GET api/product?buyer_name=true
 */
router.get('/product', async (req, res) => {
    try {
        if (req.query.product_name) {
            let products = await Product.find({product_name: req.query.product_name});
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else if (req.query.quantity) {
            let products = await Product.find({quantity: req.query.quantity});
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else if (req.query.price_rs) {
            let products = await Product.find({price_rs: req.query.price_rs});
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else if (req.query.lead_time) {
            let products = await Product.find({lead_time: req.query.lead_time});
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else if (req.query.all) {
            let products = await Product.find();
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else if (req.query.buyer_name) {
            let products = await Product.find({buyer_name: req.query.buyer_name});
            if (products.length == 0) {
                return res.status(404).send('No product found');
            }
            return res.send(products);
        } else {
            return res.status(400).send('Bad request');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Unable to find the product');
    }
});

// router.get("/product/add", async (req, res) => {
//     try{
//         const prod = new Product({
//             product_id:"102",
//             product_name:"Jacket",
//             lead_time:"5",
//             weight_gsm:"300",
//             quantity:"6",
//             price_rs:"500",
//             buyer_name:"Prince"
//         })
//         let a = await prod.save();
//         res.send(a);
//     }catch(err){
//         res.status(400).send(err);
//     }
// })

// router.get('/product/buyer', async(req, res) => {
//     try{
//         let products = await Product.find({buyer_name: req.query.name});
//         if(products.length == 0){
//             return res.status(404).send("No product found");
//         }
//         return res.send(products);
//     }catch(err){
//         console.log(err);
//         res.status(500).send("Unable to find the product");
//     }
// })
module.exports = router;
