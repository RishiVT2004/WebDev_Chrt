const express = require("express");
const zod = require("zod");
const app = express();

const todo = [];
let ReqCount = 0;
let ErrorCount = 0;

app.use(function (req, res, next) {
  ReqCount += 1;
  next();
});

function AuthMiddleWare(req,res,next){
   const username = req.headers.username;
   const password  = req.headers.password;
   const auth_schema = zod.object({
      username : (zod.string()).min(7).max(15),
      password : (zod.string()).min(5)
   })

   const validate = auth_schema.safeParse({ username: username, password: password });
  if(!validate.success){
    res.status(404).json(validate)
  }else{
    ErrorCount += 1;
    next();
  }
}



function PostMiddleWare(req, res, next) {
  const otp = req.headers.otp;
  const otp_schema = zod.string();
  const validate = otp_schema.safeParse(otp);
  if (!validate.success) {
    res.status(404).json(validate);
  } else {
    next();
  }
}

app.get('/',function(req,res){
  res.json({MESSAGE : "WELCOME TO THE TODO LIST APP, Please post a todo task"})
})

app.get("/list", AuthMiddleWare,function(req, res) {
  res.send({todo})
});

app.get('/getReq' , function(req,res){
  res.send("no of request sent to the server : "  + ReqCount)
});

app.get('/getErr' , function(req,res){
  res.send("no of Error occured : "  + ErrorCount)
});

app.use(express.json());

app.post("/post", PostMiddleWare, function (req, res) {
  const task = req.body.task;
  const deadline = req.body.deadline;
  const status = req.body.status;

  const data_schema = zod.object({
    task: zod.string(),
    deadline: zod.string(),
    status: zod.string(),
  });

  const validate = data_schema.safeParse({
    task: task,
    deadline: deadline,
    status: status,
  });

  if (!validate.success) {
    ErrorCount += 1,
    res.status(404).json(validate);
  } else {
    todo.push({
      task: task,
      deadline: deadline,
      status: status,
    });
  }
  res.json({ MESSAGE: "Task Added Successfully" });
});

app.delete('/finished',PostMiddleWare,function(req,res){
  const finished = [];
  for(let i = 0; i < todo.length; i++){
    if(todo[i].status == "Y"){
      finished.push({
        task : todo[i].task,
        deadline : todo[i].deadline
      })
    }
  }
  res.json({"Finshed Tasks : " : finished})
});

app.delete('/unfinished',PostMiddleWare,function(req,res){
  const unfinshed = [];
  for(let i = 0; i < todo.length; i++){
    if(todo[i].status == "N"){
      unfinshed.push({
        task : todo[i].task,
        deadline : todo[i].deadline
      })
    }
  }
  res.json({"Unfinshed Tasks : " : unfinshed})
});

app.listen(2001, () => {
  console.log("listening on port 2001");
});


