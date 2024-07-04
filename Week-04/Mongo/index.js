// database -> data is stored in various data servers 

// *browsers -> fetch request -> http servers -> talks to database 
// * express/http layer -> does auth check -> restricts access of data in databases 
 // some data base like firebase dosent require http server (let direct commn b/w user and database )
 
 /*
    *CRUD -> tasks of database -> (CREATE , READ , UPDATE, DELETE)
     MongoDB -> lets us create many database -> each database has many tables -> each table lets you store JSON data
    
    Express -> creates HTTP server
    JWT ->  create jets 
    Mongoose -> connect to database and perform crud

     *Using Mongose 
    1. Define schema(structure of data) -> (even though mongoDB is schemaless/NoSQL)
    2. Any kind of schema can be given to MongoDb  
*/

// ** Create backend to a server connected to a database where  there are 
// **  3 function (/signup[uname,pass,firstname] , /signin(checking if user exists) ,/users(return all users list)) 




const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin_rishi:********cluster0.wamdssn.mongodb.net/userData")
// * mongooseurl/databaselocation

const User = mongoose.model('Users' , {
    name : String,
    email : String,
    password : String
});

// const new_user = new User({
//     name : "Rishivatsal Mishra",
//     password : "2004"
// })

// new_user.save().then(() => console.log("Added"))


const app = express();
app.use(express.json());a

//HTTPfying the input 
app.post('/signin' , async function(req,res){
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    const DoesUserExistAlready = await User.findOne({email:email}); // finding a user with same email , as the one being added 
    if(DoesUserExistAlready){
        return res.status(403).json({message : "user already exist"})
    }
    const new_user = new User({
            name : name,
            email : email,
            password : password
    });

    
    new_user.save().then(() => console.log("DataBase Connected"))
    res.json("ADDED")

});

app.listen(3100)