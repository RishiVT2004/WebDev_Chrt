/*
function Promisifed(duration){
    const p = new Promise(function(resolve){ // p: new Promise(with function(resolve))
        setTimeout(function(){  //setTimeout -> Promise(function(){resolve()},duration)
            resolve(); //resolve() is executed in duration time 
        },duration)
    });
    return p; //value of p is returned ("executed")
}

// calling promises -: 

const ans = Promisifed(3000) // duration = 3000
ans.then(function(){ //calling function inside new Promise(aka : setTimeout())
    console.log("executed"); // log('executed')==>resolve() ==> value stored in declared promise => p
})
*/

