const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https') // native module

const app = express(); // new express app

// to serve static files like local images and stylesheet
// public folder is static 
app.use(express.static("public")); 

// app to use bodyparser
app.use(bodyParser.urlencoded({extended:true}));

// send signup.html on get request
app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', function(req, res) {
    // camelcase
    var fName = req.body.fname;
    var lName = req.body.lname;
    var email = req.body.email;
    console.log(fName, lName, email); // check action set to home routed and method is post! 
})

app.listen(3000, function(){
    console.log('server running at port 3000');
})