const express = require("express");

const app = express();

function sum(n){ // can be asked by query parameter -> localhost:3000/?n={} : {}= input
  let ans = 0;
  for(let i = 0;i<=n;i++){
    ans += i;
  }
  return ans;
}

app.get('/', function(req,res){
    const n = req.query.n;
    const s = sum(n)
    res.send("answer : "+s)
});

app.get('/json',function(req,res){
  res.json({
    name:"rishi",
    age:"19",
    cgpa:"9.12"
  });
});

app.listen(3000)


//  kindey patient examples

// const express = require("express");

// const app = express();

// const user = [{
//   name: "John",
//   kidneys: [{
//       healthy:false
//   }]
// }]

// app.get("/",function(req,res){
//   const UserKidney = user[0].kidneys;
//   const numberKindneys = UserKidney.length;
//   let HealthyKidney = 0;

//   for(let i = 0;i<UserKidney.length;i++){
//     if(UserKidney[i].healthy){
//       HealthyKidney = numberKindneys+1;
//     }
//   }

//   const UnhealthyKidney = numberKindneys - HealthyKidney;
//   res.json({
//     UserKidney,
//     HealthyKidney,
//     UnhealthyKidney
//   })
// })

// app.listen(3001)
