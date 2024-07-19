import { useState } from "react";

export function CreateTodo(){
   // sending requests via react-query 
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");

   return <div>
        <input style={{
           padding : 10,
           margin : 20,
           height : 15,
           width : 200,
           backgroundColor : "aqua",
           color : "black"
        }} type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}></input><br/>
        <input style={{
           padding : 10,
           margin : 20,
           height : 15,
           width : 200,
           backgroundColor : "aqua",
           color : "black"
        }} type="text" placeholder="Description"onChange={function(e){
            const value = e.target.value;
            setDescription(value)
        }}></input><br/>
   
        <button style={{
           padding : 10,
           margin : 20,
           backgroundColor : "purple",
           color : "yellow"
        }} onClick={() =>{
            fetch("https://localhost:3000/todo" ,{
               method : "POST",
               body : JSON.stringify({
               Title : title,
               Description : description
            }),
               headers : {
               "contentType" : "application/JSON",
               }
            })
               .then(async function(res){
                  const x = await res.json();
                  alert("Todo Added")
                  res.json(x)
               });
        }}>ADD A TODO</button>
    </div>
}