import React from "react";
import { useState } from "react";
/*
Create A app -: 
create a header component that takes title as a prop and renders it inside a div 
Create 2 div in the main function app which is returned in the component 
*/

function App() {
  // instead of <div> we can use <> / <React.Fragment>
  // create a button when clicked changes the title to a random number

  const [title, setTitle] = useState("my name is Rishi"); // original state of the title -> {title}
  const [title2 , setTitle2] = useState("my age is 20");

  function updateTitle() {
    setTitle("my name is " + Math.random()*10)
  }

  function updateAge(){
    setTitle2("my age is " + Math.floor(Math.random()*75))
  }

  return (
    <div>
       <button onClick={updateTitle}>Click here to change name</button><br></br> 
      <button onClick={updateAge}>Click here to change age</button> 
       
      <Header title={title}></Header>
      <Header title={title2}></Header>
       <Header title="title"></Header>
    </div>
  );
  // WE CAN'T DO THIS , AN XML WHICH DOSEN'T HAVE A TOP LEVEL DIV

  /*
 return (
        <header title="h1"></header>
        <header title="h2"></header>
  )
  */
}

//Minimizing Rerendering : pushing state down 
/*
function HeaderButton(){
  const [title, setTitle] = useState("my name is Rishi"); // original state of the title -> {title}
  const [title2 , setTitle2] = useState("my age is 20");

  function updateTitle() {
    setTitle("my name is " + Math.random()*10)
  }

  function updateAge(){
    setTitle2("my age is " + Math.floor(Math.random()*75))
  }

  return <div>
      <button onClick={updateTitle}>Click here to change name</button><br></br> 
      <button onClick={updateAge}>Click here to change age</button> 
       
      <Header title={title}></Header>
      <Header title={title2}></Header>
  </div>
}
  */

function Header({ title }) {
  // function using a header component with title as a prop
  return (
    <div>
      <b>{title}</b>
    </div>
  );
}

// React.memo
/*
const Header = React.memo(function Header({title}){
  return (
    <div>
      <b>{title}</b>
    </div>
  );
});
*/

export default App;

// Rerendering :  any time a DOM manipulation happens
// Optimization -: Minimizing Re rendering so that static components dont re render


/*
Re-Render 
1. React did some work in the component 
2. Component actually got called by react 

It happens when 
1. A state variable inside a component changes 
or 
2.A parent component re renders triggers all children to re render also

Minimizing re rendering 

1. Push the state down 
2. Using React.memo -> skips re rendering a component when its props are unchanged
*/

