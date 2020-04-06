const express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var app = express();


var logger = require('morgan');
var db = require('./db');
var cors = require('cors');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('passport');
require('./config/passport')
require("./models/dunks")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log("im on!")
});

const router = require('./routes/router');
app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
