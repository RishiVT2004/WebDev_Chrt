import React from "react"
function App(){
    return <div>
      <CardWrapper>
            Hello there , my name is Rishi , 
        I am 20 years old
        <div>
          A new div
        </div>
      </CardWrapper>
  
      <CardWrapper>
        New Card wrapper div
      </CardWrapper>
    </div>
  }
  
  function CardWrapper({children}){ // renders all component inside cardWrapper
    console.log(children)
    return <div style={
      {
        border : "4px solid yellow",
        color : "white",
        backgroundColor : "black"
      }
      }>
      {children}
    </div>
  }
  
  export default App