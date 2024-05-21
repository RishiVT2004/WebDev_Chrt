
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

// 1. ReqCount and ErrorCount 
const express = require("express")
const app = express();
const zod = require("zod");
const data = [{
  name : ,
  sec : 
}]

const reqCount = 0;
const errCount = 0;
app.use(function(req,res,next){
  reqCount++;
  next();
});

app.get('/',function(req,res){
  try{
    res.json({data})
  }catch(err){
    errCount++;
    res.status(500).json({error:err.message})
  }
});

app.use(express.json());

app.post('/',function(req,res,){
  const name  = req.body.name;
  const sec = req.body.sec;

try{
  const schema = zod.object({
    name : zod.string();
    sec : zod.number();
  })

  const validate = schema.safeParse({name : name , sec : sec})

  if(!(validate.success)){
    req.json({validate})
  }else{
    res.send("successfully posted")
  }
}catch(err){
  errCount++;
  res.status(500).json({error:err.message})
}
});

app.listen(3000)

