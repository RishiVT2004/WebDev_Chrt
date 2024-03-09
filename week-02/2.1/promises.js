// Promises 

//Writing asyn code approach 1 
/*
//Takers callback as iput
function myTimer(callback,duration){
    setTimeout(callback,duration)
}

myTimer(function(){ // can lead to callback hell
    console.log("callback executed")
},2000);

*/

//Approach 2 (using Promises/Promisify callbacktion())
// Promise -> a class in JS 
// return a promise , no callback as input

function myTimer(callback,duration){
    setTimeout(callback,duration)
}

/*
General Syntax of promise 
function PromisifiedTimeout(duration){
    const p = new Promise(function(resolve){

    });
    return p;
}
*/

function PromisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();  // calling resolve after duration by istantiation as an function in Promise Class
        },duration) 
    });
    return p;
}

//const ans = PromisifiedTimeout(2000);
//console.log(ans)  returns -> Promise { <pending> }

// calling a promise ********* (--IMP--)
const ans = PromisifiedTimeout(2000);
ans.then(function(){
    console.log("SetTimeOut executed ... ") // calls the function within promise and executes the function
})

/*
function PromisifiedTimeout(1000){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();  // calling resolve after duration by istantiation as an function in Promise Class
        },1000) 
    });
    return p;
}


-> A promise takes a function as an argument 
-> That function takes resolve as an argument
-> That Resolve takes something as an argument 
-> The .then() takes a function as an argument
-> That function takes somethig as an argument(eg: value)
-> And then that something is passed to resolve as value -> resolve(value) 
*/