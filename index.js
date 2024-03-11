// library used -> ExpressJS

// fs -> file system -> reads file on system
//Hello World -: 

const express = require('express')
const port = 3000
const app = express(); //app -> object of express

app.get('/', function(req, res){ 
  res.send('Hello World!') // sending request -> runs when someone hits your backend servers...
})

app.get('/about',function(req,res){
   res.json({
    name: "rishi",
    age : 19,
    collage : "SOA - ITER"
   });
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`) // which port is running the server
})

// create a todo app that lets users store todo on the servers...