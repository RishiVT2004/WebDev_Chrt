// actual syntax of http func -: 

const express = require("express");
const app = express();

app.get('/',function(req,res,next){
    res.send()
    next()
},function(req,res){
    res.send()
})