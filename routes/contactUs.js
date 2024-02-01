const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('', (req, res, next) => {
    console.log('In Contact-Us middleware')
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

router.get('/success', (req, res, next) => {
    console.log('In Contact-Us Success middleware')
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});


module.exports = router;