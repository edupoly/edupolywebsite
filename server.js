var express = require("express");
var app =express();
var port = process.env.port || 4500
app.use(express.static(__dirname+"/dist/edupolyfrontend/"))
app.listen(port,()=>{console.log("server running on"+port)})