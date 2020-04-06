var express = require('express');
var router = express.Router();
const index = require('./index');
const dunks = require('./dunksRoute');
router.get('/', index)
router.use('/dunks',dunks);


module.exports = router;