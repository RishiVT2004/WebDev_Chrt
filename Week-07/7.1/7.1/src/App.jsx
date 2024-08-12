import React, { useState }  from 'react'

function App() {

    const [count , setCount] = useState(0);
    return(
        <div>

        </div>
    )

}

function count({count}){
    return <div style={{
        backgroundColor : "black",
        color : "aqua",
        height : "40px",
        width : "120px"
    }}>
        count : {count}
        button : {button}
    </div>
}

function button(){
    return <div>
    <button onClick={() => {
        setCount(count+1)
    }}> Increase Count </button>

    <button onClick={() => {
        setCount(count -1)
    }}>Decrease Count</button>
    </div>
}

export default App
