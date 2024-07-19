// basic codes 
const express = require('express');
const cors = require('cors')
const {CreateTodoSchema ,UpdateTodoSchema} = require("../backend/inputType")
const {todo} = require("../backend/database")

const app = express();
app.use(express.json())
app.use(cors()); // cors -> helps to hit the backend, you canset which frontend will access the backend

// title , description , deadline
app.post('/todo' , async (req,res) => { // posting a todo
    
    const createPayload = req.body;
    const parsedPayLoad = CreateTodoSchema.safeParse(createPayload);
    if(parsedPayLoad.success){
        // add to mongoDb -: 
        try {
            await todo.create({
                title : createPayload.title,
                description : createPayload.description,
                completed : false
            })
        }
        catch(error){
            res.json({"error-messgae" : error})
        }
        res.json({
            message : "Todo Created"
        })
    }else{
        res.status(403).json({
            error : "invalid todo-inputs"
        })
        console.log(todo._id)
    }
});


app.get('/todo' , async (req,res) => { // getting list of todo
    const response = await todo.find({})
    res.json({
        TODO : response
    })
});

app.put('/completed' , async (req,res) => { // marking a task completed 
    const updatePayload = req.body;
    const parsedPayLoad = UpdateTodoSchema.safeParse(updatePayload)

    if(!parsedPayLoad.success){
        res.status(403).json({
            error : "invalid todo-inputs"
        })
    }else{
        await todo.updateMany({
            _id : req.body.id
        },{
        completed : true
    })
    res.json({
        message : "todo updated successfully"
    })
    }
});

app.listen(3000 , () =>{
    console.log("... Server is running on port number 3000 ...")
});

