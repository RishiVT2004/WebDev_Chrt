
const express = require('express');

const app = express();
let requestCount = 0;
var Std_name = [{
    name : "Rishi",
}]

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use(function(req,req,next){
    requestCount += 1;
    next();
});


app.get('/user', function(req, res) {
  res.status(200).json(Std_name);
});

app.use(express.json());

app.post('/user', function(req, res) {
    const name = req.body.name
    Std_name.push({
        name : name,
    })
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).send("request send : "+requestCount);
});

module.exports = app;

app.listen(2001);
