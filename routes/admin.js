const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product',(req, res, next) => {
    console.log("In Admin Get Add-Product middleware");
    // res.send('<h1>On Product Page</h1>');
    // res.send('<form action="/admin/product" method="POST"> <input type="text" name="title" placeHolder= "product title"> <input type="number" name="size" placeHolder= "product size"> <button type="submit">Add Product</button> </form>');
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

router.post('/product', (req, res, next) => {
    console.log('In Admin Post Product middleware')
    console.log('Product Page Body:', req.body);
    res.redirect('/shop');
});

module.exports = router;