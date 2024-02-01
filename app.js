const path = require('path');
const rootDir = require('./util/path')

const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactUs');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//'/admin' and '/shop' is the filter for admin and shop routes respectively 
app.use('/admin',adminRoutes);  
app.use('/shop',shopRoutes);
app.use('/contact-us', contactUsRoutes);

//Page not fount: It should be placed at lowest 
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
});

// const server = http.createServer(app);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});