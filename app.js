const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    console.log("In Add-Product middleware");
    // res.send('<h1>On Product Page</h1>');
    res.send('<form action="/product" method="POST"> <input type="text" name="title" placeHolder= "product title"> <input type="number" name="size" placeHolder= "product size"> <button type="submit">Add Product</button> </form>');
});

app.use('/product', (req, res, next) => {
    console.log('In Product middleware')
    console.log('Product Page Body:', req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    console.log("In another middleware1");
    res.send('<h1>Hello World </h1>');
});

// const server = http.createServer(app);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});