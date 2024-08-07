import { useEffect, useMemo, useState } from 'react'

/*
Reconcilation -: react takes the curr state , finding the diff b/w prev and curr state and 
modifing the dom accordingly ,(this re rendering occures continiously )

Eg : We need a CA to manage huge amount of money instead managing it ourself 

ReactDOM -: contails all the libraries that helps to update and re render the DOM

useEffect -: dependenct arr = [] => null -> rerender happens only once , else [n] ; n no. of rerendering ,used to 
prevent infinte re rendering from backend / database 

useCallBack -> Non necessary , can be performed by use Memo , used for not rendering a child component if funv dosen't need to change across

UseMemo -> we want the crypto and mf returns to not re render{a certain segment of code} when bank data re renders{second segment of code}

UseRef -: Helps to access dom element access
*/

function App() {
  /*
  //Basic react code
  const [count, setCount] = useState(0); // defining state 

  return (
    // () -> rep app() , 
    <div>
      <button onClick={function () {
        setCount(count + 1);
      }}>
        Count is : {count}
      </button>

    </div>
  )
    */

    // Use Effect Example 

  /*

  const [incomeData , setIncomeData] = useState({});
  const [stockData , setStockData] = useState({});

  useEffect(function () {
    setTimeout(() => {
      setIncomeData({income : 1350000})
    },3000);
  } , [])

  useEffect(function (){
    setTimeout( () => {
      setStockData({gains : 275000});
    },4000)
  } , [])

  let incomeTax = incomeData.income * 0.25
  let stockTax = stockData.gains * 0.125

  let TotalTax = incomeTax + stockTax;

  return(
    <div>
      Net income tax : {incomeTax} <br />
      Net capital gains tax : {stockTax} <br />

      <div style={{backgroundColor : "aqua"}}>
        Net taxes for the fisical year : {TotalTax}
      </div>
    </div>
  )
  */

  // Use Memo 

  // create a func which calc returns from crypto , MutualFunds and then nadd them to back income to generatre
  // final tax 

  /*
    const [mfData , setMFData] = useState({});
    const [cryptoData , setCryptoData] = useState({});
    const [bankData , setBankData] = useState({});

    useEffect(function(){
      setTimeout(() => {
        setMFData({returns : 125000});
      },2000)
    },[])

    
    useEffect(function(){
      setTimeout(() => {
        setCryptoData({gains : 45000})
      },3000)
    },[])

    
    useEffect(function(){
      setTimeout(() => {
        setBankData({income : 1200000})
      },3000)
    },[])

    // we want the crypto and mf returns to not re render when bank data re renders 

    const NonBankTax = useMemo(() => {
      return mfData.returns*0.20 + cryptoData.gains*0.33 ; 
    } , [mfData , cryptoData]) // only re renders if [mfData , cryptoData] changes 

    const IncomeTax = bankData.income*0.25 + NonBankTax ; 
    return(
    <div>
      <div>
        Non bank tax : {NonBankTax}<br />
        Bank Tax : {bankData.income*0.25}
      </div><br />
      Your tax returns are : {IncomeTax}
    </div>
    ) 
    */

    // UseRef : overriding the element (not to be used in ideal circumstances)

    useEffect(()=>{
      setTimeout(function(){
        document.getElementById("tax").innerHTML = 1250;
      },5000);
    } , [])

    const  incomeTax = 2000;

    return(
        <div>
          your income tax amount is : <div id = "tax">{incomeTax}</div>
        </div>
    )
 }


export default App
