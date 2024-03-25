const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let Todo = [];

app.get('/',(req,res)=>{
  res.json({Todo});
});

app.get('/todo/:id',(req,res)=>{
  const Todo_ID = Todo.find(t=>t.id == parseInt(req.params.id));
  if(!Todo_ID){
    res.json({
      "message":"No Id found"
    });
  }else{
    res.json(Todo_ID)
  }
})

app.post('/',(req,res)=>{
  const N_Todo = {
    id: req.body.id,
    title: req.body.title,
    deadline: req.body.deadline
  }
  Todo.push(N_Todo);
  res.json({
    "message":"Task Added"
  })
})

app.put('/todo/:id',(req,res)=>{
  const Todo_ID = Todo.findIndex(t=>t.id == parseInt(req.params.id) ) // retrives id index from todo and stores it in Todo_Id

  if(!Todo_ID){
    res.json({
      "Error Code 404" : "No Index Found"
    })
  }else{
    Todo[Todo_ID].id = req.body.id;
    Todo[Todo_ID].title = req.body.title;
    Todo[Todo_ID].deadline = req.body.deadline;
    res.json(Todo[Todo_ID])
  }

});

app.delete('/todo:id',(req,res)=>{
  const Todo_ID = Todo.findIndex(t=>t.id == parseInt(req.params.id)); 
  if (Todo_ID == -1) {
    res.status(404).send();
  } else {
    Todo.splice(todoIndex, 1); // removes element from array
    res.status(200).send();
  }
});

app.listen(3002);

