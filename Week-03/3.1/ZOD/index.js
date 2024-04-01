/*
ZOD : library of Node JS -> schema validation -> can be used w/o express
purpouse of ZOD -> used to do better input validation 
coerce ** -> optional
*/

const express = require("express");
const app = express();
const Zod = require("zod"); // initiating zod as z
const schema = Zod.array(Zod.number()) // schema : input defined as an array of number
// eg :  
// const schema = zod.object({
//     name : zod.string();
//     age : zod.number();
//     country : zod.literal("India");
// });


app.use(express.json())

app.post('/checkup',function(req,res){
    const Kidneys = req.body.Kidneys; //kidneys -> array of number
    const response = schema.safeParse(Kidneys);
    if(!response.success){
        res.status(411).json({
            message:"invalid input type"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(1000);

//global cathes -> error handling middleware

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is wrong with the server"
    })
})
