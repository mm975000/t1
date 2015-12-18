var express=require("express");
var favicon = require('serve-favicon');
var http=require("http");
var cons=require("consolidate");
var swig=require("swig");
var app=express();
var server=http.Server(app);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.engine("html",cons.swig);
app.set("view engine","html")
app.set("veiws",__dirname+"/views");

app.get("/",function(req,res){
  res.render("index",{"title":"Hello World!"});
  //res.end();
});
var port=process.env.PORT||80;
var ip=process.env.IP||"127.0.0.1";
server.listen(port,ip,function(){
	//console.log("server is on!");
});

//
//
//