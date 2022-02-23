var express= require('express');
const app=express();
var mongoose=require('mongoose');
let alert = require('alert');
require('dotenv').config()
var User = require('../Major/schema/schema');
var router=require('./routes/api');

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sign-in',(req,res)=>{
    // res.send(req.body)
    User.exists({email: req.body.signinemail, password:req.body.signinpass}, function (err, docs) {
        if (docs){
            // res.send("signin successfull");
            alert('signin successfull');
            res.redirect('/');
        }
        else{
            // res.send('You have not registered so, please register');
            alert('You have not registered so, please register');
            res.redirect('/');
        }
    });
})

app.post('/sign-up',(req,res)=>{
    // res.send(req.body)
    // const source = await EmailTemplate.findOne({ name });
    User.exists({email:req.body.signupemail}, function (err, doc) {
        if (doc){
            // res.send("you are already signed up!! so, Please signup");
            alert('you are already signed up!! so, Please signup');
            res.redirect('/');
        }else{
            var date=new Date().toLocaleString();
            var AddData=new User({
                email : req.body.signupemail,
                password : req.body.pass1,
                dateofsignup : date
            });
            AddData.save((err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                    // res.send('signup successfull')
                    alert('signup successfull');
                    res.redirect('/');
                }
            });
        }
    });
})


app.listen(3000,()=>{console.log('port started')})