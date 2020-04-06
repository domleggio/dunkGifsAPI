//dunk.js


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
  url : {type:String,required:true},
});

module.exports = mongoose.model('dunks',schema);