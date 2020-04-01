var express = require('express');
var router = express.Router();

var DunkController = require('../controllers/dunkController');

router.get("/", DunkController)

module.exports = router;