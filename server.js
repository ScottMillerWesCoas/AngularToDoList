var express = require ('express'); 
var app = express(); 
var fs = require('fs'); 
var path = require('path'); 

app.use(express.static(path.join(__dirname, './'))); 


app.get('/', function(req, res){
    res.send('./toDoHome.html'); 
});


app.listen(4000);
console.log("you're up on 4000");  