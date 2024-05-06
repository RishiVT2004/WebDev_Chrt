const express = require("express");
const app = express();

const std = [{
    name : "A",
    info : [{
        cgpa : "9.01",
        fees_payed : "y",
    }]
},{
    name : "B",
    info : [{
        cgpa : "9.21",
        fees_payed : "n"
    }]
}]

// all info 
app.get('/',function(req,res){ // /?n=" query parameter
    res.json({std})
});

/*
app.get('/fees' , function(req,res){
    let numFeesNotPayed = 0;
    for(let i = 0;i<std.length;i++){
        if(std[i].info[0].fees_payed == "n"){
            numFeesNotPayed += 1;
        }
    }
    res.json({
        "no. of students who have not payed the fees " : numFeesNotPayed,
    })
})
*/

app.use(express.json());
// adding data 
app.post('/',function(req,res){ // input throgh body 
    const name = req.body.name;
    const cgpa = req.body.cgpa;
    const fees_payed = req.body.fees_payed;
    std.push({
        name : name,
        info : [{cgpa,fees_payed}],
    })
    res.json({message : "updated successfully ... "})
})

// replaces value
app.put('/',function(req,res){
    for(let i = 0;i<std.length;i++){
        std[i].info[0].fees_payed = "n";
    }
   res.json({message : "put method update"})
})

// removing a set of info
app.delete('/',function(req,res){   
    let num = 0;
    for(let i = 0;i<std.length;i++){
        if(std[i].info[0].fees_payed == "n"){
            num++;
        }
   }
   res.send("number of student with pending fees : " + num);
})

app.get('/info_not_payed' , function(req,res){
    const feesNotPayed = [];
    for(let i = 0;i<std.length;i++){
        if(std[i].info[0].fees_payed == "n"){
            feesNotPayed.push(std[i].name)
        }
   }
   res.json(feesNotPayed)
});
app.listen(3000);
