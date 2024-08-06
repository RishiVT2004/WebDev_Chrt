
/*

Keys tell React which array item each component corresponds to, so that it can match them up later. 
This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. 
A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
*/
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
  let IDcounter = 3;
  
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
      id : IDcounter++,
      title : "title 4",
      description : "description 4"
      }])
    }
    // key -> way to uniquely identify an todo
    return (
      <div>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(todo => <Todo key={todo.id} title = {todo.title} description = {todo.description} />)} 
      </div>
    )
  }
  /*
  function Todo({title,description}){
    return <div>
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </div>
  }
  */
   // using memo 
  const Todo = React.memo(function Todo({title , description}){
    return <div>
    <h1>
      {title}
    </h1>
    <h2>
      {description}
    </h2>
  </div>
  });
  
  export default App