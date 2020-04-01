//dunk.js

var mongoose = require('mongoose');  

var DunkSchema = new mongoose.Schema({
    url:{type: String,required: true},
  })


mongoose.model('dunks', DunkSchema)

module.exports = mongoose.model('dunks');