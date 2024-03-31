const express = require("express");
const app = express();

app.use(express.json())

app.post('/checkup',function(req,res){
    const Kidneys = req.body.Kidneys;
    if(!Kidneys){
        res.json({
            msg:"invalid input type"
        });
    }else{

    const KidneyLength = Kidneys.length;
    res.send({"Kidney-Length": KidneyLength});

    }
});

app.listen(1000);

//global cathes -> error handling middleware

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is wrong with the server"
    })
})
