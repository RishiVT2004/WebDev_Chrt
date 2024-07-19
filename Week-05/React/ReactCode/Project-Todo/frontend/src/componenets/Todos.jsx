//import Prop from 'prop-types' 

// rendering todos array element
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todos.completed == true ? "Completed ":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}