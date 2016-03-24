/*var http = require("http");

http.createServer(function(request, response) {
//console.log("hello world");
response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(7777);*/



var express = require("express");
var path = require("path");
var bodyParser= require("body-parser");

var app = express();
//configure app
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))
// use middleware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(express.static(path.join(__dirname,"bower_components")));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
console.log(req.body) // populated!
next();
});


//define routes with methods(get, post, put, delete)
app.use(require("./todo"));

app.listen(7777,function(){
  console.log("app running on port 7777");
})
