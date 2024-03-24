const express = require("express");

const app = express();
app.use(express.json());

const user = [{
  name: "Rishi",
  age: 18,
  cgpa:9.18
},{
  name:"",
  age:"",
  cgpa:"",
}
]

app.get('/',function(req,res){
  const U_name = user[0].name;
  const U_age  = user[0].age;
  const U_CGPA = user[0].cgpa;

  res.json({
    U_name,
    U_age,
    U_CGPA
  })
})


app.post('/',(res,req)=>{
  
  res.json({
    message:"done"
  });
});

app.put('/',(res,req)=>{
  user[1].name = "Aditya",
  user[1].age = "20",
  user[1].cgpa = "8.90"

  res.json({
    U2_name:user[1].name,
    U2_age:user[1].age,
    U2_cgpa:user[1].cgpa
  });
})

app.listen(5001);
