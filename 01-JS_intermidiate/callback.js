/*
function addn(n1,n2){
    return n1+n2;
}

function subs(n1,n2){
    return n1-n2;
}

function operation(a,b){
    let ob1 = addn(a,b);
    let ob2 = subs(a,b);
    console.log(ob1,ob2);
    return ob1*ob2
}

let ans = operation(8,4);
console.log(ans)
*/

function square(n){
    return n*n;
}
function cube(n){
  return (n*n*n);
}

function ops(a,b){
    let x1 = square(a);
    let y1 = cube(a);

    let x2 = square(b);
    let y2 = cube(b);

   console.log((x1+y1),(y2+x2));
}

let z = ops(5,6);
console.log(z)