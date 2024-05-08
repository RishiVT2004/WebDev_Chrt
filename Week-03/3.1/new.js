const express = require("express");
const { string } = require("zod");
const app = express();

const std = [
    {
    name : "Rishi",
    info : {
        regd_no : 13165,
        fees_payed : "y",
    }
},{
    name : "Amit",
    info : {
        regd_no : 13120,
        fees_payed : "n"
    }
},{
    name : "Ritik",
    info : {
        regd_no : 11004,
        fees_payed : "n",
    }
},{
    name : "Kuldeep",
    info : {
        regd_no : 14982,
        fees_payed : "y",
    }
}]
// middleware are used to do pre-checks(authentication/input validation) 

function AuthMiddleWare(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(!(username === "rishi" && password === "pass")){
        res.json({
            message : "invalid inputs"
        });
    }else{
        next();
    }
}

app.get('/',function(req,res){ // /?n=" query parameter
    res.send("welcome to the database")
});

// all info 
// to access the database the used needs to give proper username and password

app.get('/database',AuthMiddleWare,function(req,res){ // /?n=" query parameter
    res.json(std)
});


app.use(express.json()) // app.use(middleware)

app.post('/newdata' , function(req,res){
    const name = req.body.name;
    const regd_no = req.body.regd_no;
    const fees_payed = req.body.fees_payed;
    std.push({
        name : name,
        info : {regd_no,fees_payed},
    })
    res.json({message : "updated successfully ... "})
});


// exception handling --> global catches :-

app.use(function(err,req,res,next){
    res.json({
        error : "exception intecepted"
    })
})

app.listen(2004)
