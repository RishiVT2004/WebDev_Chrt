/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState }  from 'react'
import { CountContext } from './context';



/*
Prop Drilling -: if a component C1 has a prop required by C3 , then it needs to be passed down to C2 then to C3
    -> Visually unappealing , passing props can become very verbose 

Solving Prop Drilling -> Context API
*/

/*

Solving using prop drilling
function App() {

    const [count , setCount] = useState(0);
    return(
        <div>
            <Count count = {count} setCount={setCount}/><br />
        </div>
    )

}

function Count({count,setCount}){
   return <div>
        <b>Count : {count}</b>
        <Button count= {count} setCount = {setCount} />
   </div>
}

function Button({count , setCount}){
    return <div><br />
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease
      </button>
    </div>
}
*/

//Using Context API -> gets rid of prop drilling -> teleports components from parent to required components 

// pass count to CountRendered and button w/o passing it to Count()

// wrap anyone who wants to use the func using context api with a provider 
function App(){
    const [count , setCount] = useState(0);
    return <div>
       <CountContext.Provider value={count}>
            <Count setCount={setCount} />
       </CountContext.Provider>
    </div>
}

function Count({setCount}){
    return <div>
        <CountRenderer />
        <Button setCount={setCount} />
    </div>
}

function CountRenderer(){
    const count = useContext(CountContext)
    return <div>
        Count : {count}
    </div>
}

function Button({setCount}){
    const count = useContext(CountContext);
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase
        </button>
        <button onClick={() => {
            setCount(count -1)
        }}>Decrease
        </button>
    </div>

}
