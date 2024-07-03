/*
todo 
hss 2 end point 
1.] post -> give username and password and return the username in 
a jwt token 
2.] get -> if token is correct , returs array of users 

*/

const express = require('express');
const jwt = require('jsonwebtoken');
const password_jwt = "2004" // password to access & verify jwt

const app = express();
app.use(express.json())
const user = [{
    username : "A",
    name : "a",
    password : "1"
},{
    username : "B",
    name : "b",
    password : "2"
},{
    username : "C",
    name : "c",
    password : "3"
}]

function ifUserExist(username,password){
    let user_status = false;
    for(let i = 0;i<user.length;i++){
        if((user[i].username == username ) && (user[i].password == password)){
            user_status =  true;
        }
    }
    return user_status;
}

app.post('/signin',function(req,res){
    const uname = req.body.uname
    const pass = req.body.pass

  if(!ifUserExist(uname,pass)){
    res.status(403).json({
        error : "user dosent exist"
    })
  }

    const token_jwt = jwt.sign({username:uname},password_jwt);
    return res.json({
        token_jwt,
    });
})

app.get('/users',function(req,res){
    const token = req.headers.authorization // auth -> jwt 
    try{
        const decoded = jwt.verify(token,password_jwt);
        const username = decoded.uname
         return res.json({
            users : user
        })
    }
    catch(err){
        return res.status(403).json({
            error : "invalid token"
        })
    }
});

app.listen(3100);
