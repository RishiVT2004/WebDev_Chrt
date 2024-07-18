import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// can write both js and react function 
// jsx -> xml

/*
basic way to write code 
function App() {

  const [count, setCount] = useState(0); // correct way to define/initialize state

  function onClickHandler(){
    setCount(count+1); // correct way
  }

  return (
    <button onClick={onClickHandler}>
      {count}
    </button>
  )
}
*/

// better way 

function App(){
  const [count,setCount] = useState(0); // defining state
  return(
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
    </div>
  )
}

function CustomButton(state){
  function onClick(){
    state.setCount(state.count+1);
  }

  return <button onClick={onClick}>
    Counter : {state.count}
  </button>
}

export default App
