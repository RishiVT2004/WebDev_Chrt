/*
function square(n){
   return n*n;
}

function cube(n){
    return n*n*n;
}

function sumSquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}


function sumCube(a,b){
    let cube1 = cube(a);
    let cube2 = cube(b);
    return cube1+cube2; // Dosen't follow DRY
}

let ans1 = sumSquare(2,3);
console.log(ans1)
*/
// example of callback...
function square(n){
    return n*n;
}
 
function cube(n){
    return n*n*n;    
}


function quad(n){
    return n*n*n*n;    
}


function sumofPowers(a,b,pow){ // pow -> 2-> square, 3-> cube ** pow represents the callback 
    let p1 = pow(a); // passing function as an argument(input)
    let p2 = pow(b);
    return p1+p2;
}

let ans = sumofPowers(3,4,quad);
console.log(ans);