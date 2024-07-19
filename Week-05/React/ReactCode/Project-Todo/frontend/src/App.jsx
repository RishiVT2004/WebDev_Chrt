//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import { useState } from 'react'
import './App.css'
import { CreateTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/Todos'
function App() {

  //const [todos,setTodos] = useState([]);

  return (
    //fetching data from backend... -> Use Effect Hook

  <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[{
        title : "cjwisjfciwj",
        description : "98dhq9uwnioxq"
      }]}></Todos>
    </div>
  )
}

export default App
