var express=require("express");
var favicon = require('serve-favicon');
var http=require("http");

var app=express();
var server=http.Server(app);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.get("/",function(req,res){
  res.send("Hello World!");
});
server.listen(8080,function(){
	console.log("server is open at 8080");
});
//
//
//