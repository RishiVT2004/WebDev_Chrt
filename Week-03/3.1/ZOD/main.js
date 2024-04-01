
const express = require("express");
const app = express();


const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        name : zod.string(),
        password : zod.string()
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post('/login',(req,res)=>{
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            messgae:"invalid inputs"
        })
    }else{
        res.json({
            response
        })
    }
});

app.listen(1000)

