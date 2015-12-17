var express=require("express");
var favicon = require('serve-favicon');
var app=express();
app.use(favicon(__dirname + '/public/flower_01.png'));
app.get("/",function(req,res){
  res.send("Hello World!");
});
//
//
//