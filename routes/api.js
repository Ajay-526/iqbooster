var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var User = require('../schema/schema');

var query = 'mongodb+srv://iqbooster:ABASR@cluster0.cbspc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
module.exports = router;