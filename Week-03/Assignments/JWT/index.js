/*
1.] Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
2.] Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
3.] Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewis
*/

const express = require("express")
const jwt = require("jsonwebtoken")
const jwt_pass = "rishi24"
const zod = require("zod");

const app = express();
app.use(express.json())

const Userdata = [{}];

function DoesUSerExistAlreadyMiddleWare(username,password){
    let user_status = false;
    for(let i = 0;i<Userdata.length;i++){
        if((Userdata[i].username = username) && (Userdata[i].password = password)){
            user_status = true;
        }
    }
    return user_status;
}

app.post('/signin',function(req,res,){

    const username = req.body.username
    const password = req.body.password

//     if(!DoesUSerExistAlreadyMiddleWare(username,password)){
//         res.status(403).json({
//             error : "user dosent exist"
//         })
//    }

    const schema = zod.object({
        username : zod.string().email(),
        password : zod.string().min(6)
     })

    const {success} = schema.safeParse(req.body)
    
    
    if(!success){
        res.status(403).json({
            null : "wrong username or password input"
        })
    }else{
        const token = jwt.sign({username:username} , jwt_pass)
        return res.json({
            token : token
        })
    }
});

app.get('/decode' , function(req,res){
    const token = req.headers.authorization

    try{
        const decodedJWT = jwt.verify(token,jwt_pass)
        const username = decodedJWT.username
        res.json({
            user : username
        })
    }catch(error){
        res.status(403).json({
            error
        })
    }
});



app.listen(3100)
