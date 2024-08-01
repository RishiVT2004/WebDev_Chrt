
/*
Create A simple todo app that renders 3 todos 
1. Create a todo component that accepts title , description as input 
2. Initialize a state array with 3 todos 
3. Iterate over the Array to render all todos
4. A button in the top level app component to add a new todo
*/
// spread operator , initialize current todos and adds a new todo at the end usinf {}

  // {todos.map(function(todo){
  //   return <todo title = {todos.title} description = {todos.description}/> 
  // })} alt (simpler way to render)

import React from "react";
import { useState } from "react";

//2
function App() {
  const [todos,setTodos] = useState([{
    id : 1,
    title : "task1",
    description : "description 1"
  } , {
    id : 2,
    title : "task2",
    description : "description 2"
  } , {
    id : 3,
    title : "task3",
    description : "description 3"
  }])

  function addTodo(){
    setTodos([...todos , {
    id : 4,
    title : "title 4",
    description : "description 4"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo title = {todos.title} description = {todos.description} />)}
    </div>
  )
}

function Todo([title,description]){
  return <div>
    <h1>
      {title}
    </h1>
    <h2>
      {description}
    </h2>
  </div>
}

export default App