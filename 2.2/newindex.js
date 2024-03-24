const express = require("express");

const app = express();

//user database
const user = [{
  name: "John",
  kidneys: [{
      healthy:false
  }]
}]


app.use(express.json());

app.get("/",function(req,res){
  const UserKidney = user[0].kidneys;
  const numberKindneys = user[0].kidneys.length;
  let HealthyKidney = 0;

  for(let i = 0;i<UserKidney.length;i++){
    if(UserKidney[i].healthy){
      HealthyKidney = numberKindneys+1;
    }
  }

  const UnhealthyKidney = numberKindneys - HealthyKidney;
  res.json({
    UserKidney,
    HealthyKidney,
    UnhealthyKidney
  })
})

//POST 

app.post('/',(req,res)=>{ //uses popular input type -> sending data to body(like query parameter in get)
    const isHealthy = req.body.isHealthy; //to se req.body we use app.use(express.json())
    user[0].kidneys.push({
      healthy: isHealthy //updates value of healthy key
    })
    res.json({
      msg:"done" //update get requset everytime-> when rerun the data det reversed to original data 
    })
});

//PUT

app.put('/',(req,res)=>{
  for(let i = 0;i<user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy = true; //updates all indexes of healthy to false
  }
  res.json({})// if not included reqest will hang 
});

//DELETE

app.delete('/',(req,res)=>{
  const n_kidney = [];
  for(let i =0;i<user[0].kidneys.length;i++){
    if(user[0].kidneys[i].healthy){
      n_kidney.push({
        healthy:false
      })
    }
  }
  


  user[0].kidneys = n_kidney; //new kidney object implemented 
  res.json({msg:"implemented"})
})

app.listen(3000)

//Assignment explanation -> last 10 min of 2.5
