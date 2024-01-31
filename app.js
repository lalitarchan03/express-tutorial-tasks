const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

// const server = http.createServer(app);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});