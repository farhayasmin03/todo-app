const http = require('http');

const request = require('request');
const port = 3000;
var express = require('express');

var app = express();

const bodyParser = require('body-parser');

var ejs = require('ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
var task = ["buy socks", "practise with nodejs"];

app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render('index');
});

app.post('/addtask',function(req,res){
    var newTask= req.body.newtask;
    console.log(newTask);
    task.push(newTask);
    res.redirect("/");
});

app.get("/", function(req, res) {
    res.render('index', { task: req.body.task});
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});