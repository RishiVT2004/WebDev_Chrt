// hospital example -> doctor is single threaded. before metting soctor some pre checks like blood test happens 
/*
    question to ask  -: how to these pre checks happen 
    MIDDLEWARES -> used to do prechecks -> 2 types -> (authentication,input - validation) -> done before actual logic is executed

*/
/*
eg : access a hospital database but before executing main logic add 2 constraints 
1. User needs to send KidneyId as query param taking num of kidney (1/2)
2. User should send username and Password in headers

*/
//method 1 (w/o middlewares)
// not the right way 


/*
const express = require("express");
const app = express();


app.get('/hospital-check',(req,res)=>{
    const KidneyId = req.query.KidneyId
    const name = req.headers.name;
    const password = req.headers.password

    // check condition

    if(name != "rishi" || password != "pass"){
        res.status(400).json({
            "message" : "Wrong id input"
        })
        return;
    }

    if(KidneyId != 1 && KidneyId != 2){
        res.status(400).json({
            "message" : "wrong kidney inputs"
        })
        return;
    }

// main code logic
    res.send("Check - Up complete")
});

app.listen(1008)
*/

// major error in this format -> if we want to introdce a new route (/operate-kidney) we would need to redo
//all the check in the new method and hence break DRY principle


// right way -> create a function that calls the pre-checks(wrapper functions) -: 


const express = require("express");
const app = express();


function UserMiddleWare(req,res,next){
    const username = req.headers.name;
    const password = req.headers.password;

    if(username != "rishi" && password != "pass"){
        res.status(403).json({msg:"invalid credentials"})
    }else{
        next();
    }
};

function KidneyMiddleWare(req,res,next){
    
    const KidneyId = req.query.KidneyId
    
    if(KidneyId != 1 && KidneyId !=2){
        res.status(403).json({msg:"invalid kidney input"})
    }else{
        next();
    }
};

app.get('/',(req,res)=>{
   res.send({
        msg:"Welcome to ABC Hospital"
   })
});


app.get('/hospital-check',UserMiddleWare,KidneyMiddleWare,(req,res)=>{
    res.send("Health Checkup Complete")
});

app.get('/hospital-check/heart',UserMiddleWare,(req,res)=>{
    res.send("Heart CheckUp Complete")
});
app.listen(1008)

//app.use(middleware) -> any route after this will have the middleware inplemented
