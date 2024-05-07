const express = require("express");
const app = express();

const std = [{
    name : "Rishi",
    info : {
        regd_no : 13165,
        fees_payed : "y",
    }
},{
    name : "Amit",
    info : {
        regd_no : 13120,
        fees_payed : "n"
    }
},{
    name : "Ritik",
    info : {
        regd_no : 11004,
        fees_payed : "n",
    }
},{
    name : "Kuldeep",
    info : {
        regd_no : 14982,
        fees_payed : "y",
    }
}]

// all info 
app.get('/',function(req,res){ // /?n=" query parameter
    res.json(std)
});


app.use(express.json());
// adding data 
app.post('/',function(req,res){ // input throgh body 
    const name = req.body.name;
    const regd_no = req.body.regd_no;
    const fees_payed = req.body.fees_payed;
    std.push({
        name : name,
        info : {regd_no,fees_payed},
    })
    res.json({message : "updated successfully ... "})
})

// replaces value
app.put('/',function(req,res){
    for(let i = 0;i<std.length;i++){
        std[i].info.fees_payed = "y";
    }
   res.json({message : "put method update"})
})

// removing a set of info
app.delete('/',function(req,res){   
    let num = 0;
    for(let i = 0;i<std.length;i++){
        if(std[i].info.fees_payed == "n"){
            num++;
        }
   }
   res.send("number of student with pending fees : " + num);
})

app.listen(3000);
/*
app.get('/info_not_payed' , function(req,res){
    const feesNotPayed = [];
    for(let i = 0;i<std.length;i++){
        if(std[i].info[0].fees_payed == "n"){
            feesNotPayed.push(std[i].name)
        }
   }
   res.json(feesNotPayed)
});

*/