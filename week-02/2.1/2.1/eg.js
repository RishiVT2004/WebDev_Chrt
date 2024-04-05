function Promise_Sum(duration){
    console.log("promise started ");
    const pr = new Promise(function(get_sum){
        setTimeout(function(){
            get_sum();
        },duration);
    })
    console.log("timer started");
    return pr
}

function get_sum(){
    let n = 10;
    let sum = 0;
    for(let i = 0;i<=n;i++){
        sum+=i;
    }
    return sum
}

// // calling promise 

// const ans = Promise_Sum(3000);
// ans.then(function(){
//    get_sum()
//    console.log("promise ended")
// })

// Promise_Sum(2500).then(function(){
//     get_sum();
//     console.log("promise ended")
// })

// await syntax -: 


function Promise_Sum(value){
    console.log("promise started ");
    const pr = new Promise(function(){
        setTimeout(function(resolve1,resolve2){
            resolve1 = get_square(value);
            resolve2 = get_cube(value);
            console.log("value of square of "+value+" is : "+resolve1);
            console.log("value of cube of "+value+" is : "+resolve2);

        },2000);
    })
    console.log("timer started");
    return pr;
}

function get_square(value){
    let val_square = value**2;
    return val_square;
}


function get_cube(value){
    let val_cube = value**3;
    return val_cube;
}

async function main(){
    const ans = await Promise_Sum(10);
    console.log(ans);
}

main();

/*
function Promisifed(duration,val){
    const p = new Promise(function(){ 
      console.log("set timeout start")
        setTimeout(function(resolve){ 
            resolve = get_sum(val);
            console.log(resolve)
            console.log("await end")
        },duration)
    });
    return p;
}

function get_sum(val){
  console.log("resolving get_sum")
  let sum = 0;
  for(let i = 1;i<=val;i++){
    sum+=i;
  }
  return sum;
}

// calling promises -: 

async function main(){
  console.log("await called")
  const result = await Promisifed(2000,10);
  console.log(result)
}

main();
*/