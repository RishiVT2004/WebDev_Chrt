const express = require("express");
const app = express();
const zod = require("zod");

const student_database = [{
  name : "Rishi",
  DOB : "03 : 11 : 2004",
  info : {
    regd_no : 2241013165,
    CGPA : 9.04
  }
}]

let requestCount = 0;
let errorCount = 0;

app.use(function(req,res,next){
  requestCount += 1;
  next();
});

app.get('/',function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  
  const auth_schema = zod.string({
    username : (zod.string().min(3).max(12)),
    password : (zod.number(10))
  });

  const response = auth_schema.parse(username,password);
  if(!(response.success)){
    errorCount += 1;
    res.status(401).json({ERROR : "type : Authentication"});
  }else{
    res.status(200).json({student_database});
  }
});

app.get('/count' , function(req,res){
  res.json({
    "errorCount" : errorCount,
    "requestCount" : requestCount
  });
});

app.use(express.json());

app.post('/',function(req,res){
    const name = req.body.name;
    const DOB = req.body.DOB;
    const regd_no = req.body.regd_no;
    const CGPA = req.body.CGPA;

    const schema = zod.string(
      {
        name : zod.string(),
        DOB : zod.string(),
        regd_no : zod.number(10),
        CGPA : zod.number()
      }
    )
    const response = schema.parse(name,DOB,regd_no,CGPA);

   if(!(response.success)){
      errorCount += 1;
      res.status(401).json("ERROR while filling student data")
   }else{
     student_database.push({
       name : name,
       DOB : DOB,
       info : {regd_no,CGPA}
     })
     res.json({message : "student added successfully"});
   }
});
app.listen(2001)
