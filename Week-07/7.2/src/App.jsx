
// StateManagement with Recoil

/*
What is State Management 

React App -> State Component(defines logic) + Other Components 

Recoil -> State Management library for React (Others -> Redux) -> helps to divide the app to state and components 
Recoil has concepts of ATOMS -> Smallest unit of state , Atom can be defined outside the comnponent , can be transported to any components 

Creation of Atoms 

Atom is similar to  useState hook and it helps to define State , we can give a default value to count and export to any component that 
requires atom , those components will re render and others will not.

Important Recoil Components -:

atom
RecoilRoot -> Used to wrap components which use recoil logic  
useRecoilState -> same as useState , gives curr value and updates curr value
useSetRecoilState -> Only vor Update but doesnt give the curr value
useRecoilValue -> gives just the value , no updates 
selector - represent a piece of derived state(state which are derived based on some some dependencies) 
eg : useMemo(() => {
},[]) 



*/
import { useState } from 'react'
import { RecoilRoot, useSetRecoilState , useRecoilState , useRecoilValue} from 'recoil'
import { counterAtom , evenSelector } from './store/atoms/count'

function App() {
 return(
  <div>
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  </div>
 )
}

function Counter(){
  return(
  <div>
    <Header />
    <CountRenderer />
    <Button />
  </div>
  )
}


function Header(){
  return(<div>
  <h2>
    Welcome to the counter Application
  </h2>
  <i>
    <h3>
      Below is an iteractive counter made with help of recoil
    </h3>
  </i>
  </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(counterAtom);
  return <div>
    <b>
      counter : {count}
    </b>
    <EvenCountRenderer /><br />
  </div>
}


// selectors -> it is even if curr count is even 
// if num is even return "it is even" else null
/*
  not optimal way 

 const count = useRecoilValue(countAtom)
 return <div>
  {(count % 2 == 0) ? "Even number" : null}
 </div>

  */

function EvenCountRenderer(){
  const EvenNumber = useRecoilValue(evenSelector);
  return <div>
    {EvenNumber ? "even number " : "odd number"}
  </div>
}

function Button(){
  const setCount = useSetRecoilState(counterAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)    
    }}>
      Increse
    </button>
    <button onClick={() => {
        setCount(count => count - 1)
    }}>
      Decrese
    </button>
  </div> 
}

export default App
