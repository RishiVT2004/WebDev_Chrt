import React  from 'react'
import { useState , lazy , Suspense} from 'react'
import { BrowserRouter , Routes ,Route, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() => import('./Components/Dashboard'))
const LandingPage = React.lazy(() => import('./Components/LandingPage'))
const About = React.lazy(() => import('./Components/About'))

/*
Routing -: 
1. Single page application(Using UseNavigate Hook ) -: Dynamically changing the page w/o fetching data from backend
2. Client side bundle -: the Js file recieved from the backend server  
3. Client Side Routing -: Code you write on your side to make sure proper architecture of the code base 

Doing Routing in react -> react-router-dom

Lazy Loading -> If you change th ecode a little bit on certain page , then the components of the page not updated will load eventually
    needs to be wrapped within Suspense API -> used for async data fretching , states if the given comp is to be loaded, in mwanwhile load fallback('...')  
    for large codebases 

Prope Drilling and State Management -> For large applictions with multiple States 
*/

function App() {
    // landing page and dashboard
    // const navigate = useNavigate(); // for client side re rendering -> to be used inside BrowserRouter
    // create a new component inside Browser Router and put all navigae logic inside it 
    return(
        // client side routing 
    <div> 
        <div style={{ // stays constant
            backgroundColor : "black",
            color : "white",
            height : "30px"
        }}>
            <b>Constant Div Irrespective of page</b>
        </div>

        <BrowserRouter>
            <Appbar />
            <Routes>
                <Route path = "/" element = {<Suspense fallback = {"loading..."}><LandingPage /></Suspense>} />
                <Route path = "/dashboard" element = {<Suspense fallback = {"loading..."}><Dashboard /></Suspense>}/>
                <Route path = "/about" element = {<Suspense fallback = {"loading..."}><About/></Suspense>} />
            </Routes>
        </BrowserRouter>
    </div>
       
    )

    function Appbar(){
        const navigate = useNavigate();
        return (
        <div>
            <div style={{ // buttons 
            backgroundColor : "aqua",
             }}>

            <button onClick={() => {
                //window.location.href = '/' // issue -> not client size re rendering (html/js recieved from backend)
                navigate("/")
            }}>Landing Page</button>

            <button onClick={() => {
                //window.location.href = '/dashboard'
                navigate("/dashboard")
            }}>DashBoard</button>

            <button onClick={() => {
                navigate("/about")
            }}>About</button>
            
            </div>
        </div>
        )
        
    }
}

export default App
