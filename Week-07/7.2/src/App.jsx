
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

import { useContext, useMemo, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom , evenSelector} from "./store/atoms/count";


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <evenCountRenderer />
  </div>
}

// selectors -> it is even if curr count is even 
function evenCountRenderer(){
  /*
  not optimal way 

 const count = useRecoilValue(countAtom)
 return <div>
  {(count % 2 == 0) ? "Even number" : null}
 </div>

  */

 const isEven = useRecoilValue(evenSelector)
  // if num is even return "it is even" else null
  return <div>
  {isEven ? "it is even" : null} 
 </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd"); // re renders only once 

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
