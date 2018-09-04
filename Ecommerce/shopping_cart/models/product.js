var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    cost:{type:Number,required:true}
});

module.exports = mongoose.model('Product',schema);