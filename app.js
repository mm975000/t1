var express=require("express");
var favicon = require('serve-favicon');
var app=express();
app.use(favicon(__dirname + '/public/favicon.ico'));
app.get("/",function(req,res){
  res.send("Hello World!");
});
//
//
//