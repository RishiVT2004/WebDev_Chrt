//Givebn an array filter the even no.
//normal - soln


// const arr = ["1", "2", "3", "4", "5", "6"];
// const even_arr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     even_arr.push(arr[i]);
//   }
// }

// console.log(even_arr);

//filter func()

// const arr = ["1", "2", "3", "4", "5", "6"];

// function filter_even(n){
//     if(n%2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const ans = arr.filter(filter_even) // filters all value of arr with the logic of the given func()
// console.log(ans);

//filtering using callbacks -: 

const arr = ["1", "2", "3", "4", "5", "6"];
const ans_odd = arr.filter((n) => { //implementing arrow
    if(n%2 == 1){
        return true;
    }else{
        return false;
    }
});

console.log(ans_odd);

console.log('rishi'.startsWith('r')) //-> returns true