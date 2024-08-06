//Wrapper Components -> a react component that takes another component as input
import React, { useEffect } from "react";

/*
Hooks 

*/

function App(){
  return <div>
    <CardWrapper>
        <div>
          <div>
            Name : Rishivatsal Mishra
          </div> 
          <div>
           Age : 20
          </div>
         <div>
         Collage : SOA - Iter
         </div> 
        </div>
    </CardWrapper>

    <CardWrapper2>
      <div>
        Semester : 5th 
        Cgpa : 8.8
      </div>

      <div> 
        Connect me here : 
        <div>
          LinkedIn : 
          Twitter : 
          GitHub : 
        </div>
      </div>
    </CardWrapper2>
  </div>
}

function CardWrapper({children}){
  return <div style={{border : "4px solid black"}}>
    {children}
  </div>
}

function CardWrapper2({children}){
  return <div style={{border : "4px solid brown"}}>
  {children}
</div>
}

export default App