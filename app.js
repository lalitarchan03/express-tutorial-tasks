const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//'/admin' and '/shop' is the filter for admin and shop routes respectively 
app.use('/admin',adminRoutes);  
app.use('/shop',shopRoutes);

//Page not fount: It should be placed at lowest 
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

// const server = http.createServer(app);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});