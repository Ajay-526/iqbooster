var mongoose=require('mongoose');
  
var SignUp = new mongoose.Schema({
    email:String,
    password:String,
    dateofsignup:Date,
});
  
module.exports = mongoose.model(
    'user', SignUp, 'users');