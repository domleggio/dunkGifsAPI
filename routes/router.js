var express = require('express');
var router = express.Router();
const index = require('./index');
const dunks = require('./dunks');
// const users = require('./users')
// const wishList = require('./wishlist');
router.get('/', index)
router.use('/dunks',dunks);

// router.use('/users',users);
// router.use('/wishlist',wishList);

module.exports = router;