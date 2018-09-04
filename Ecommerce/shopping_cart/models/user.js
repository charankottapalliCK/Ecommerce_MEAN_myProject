require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
});

module. = mongoose.model('User',userSchema);exports