
// const input_arr = []

// function raise_n(i){ => multiples all indexes by n
//     return n*i;
// }

// const ans = input_arr.raise_n(n)
// console.log(ans);




// using map func() write a function that doubles all indexes of an array...
// used for transforming array
const input = ['1','2','3']

function double_index(i){ // defining an function that doubles an given index
    return i*2;
}

const ans = input.map(double_index) // map function iterates over input and doubles all indexes 
// console.log(ans)

//make a map func() taking 2 input (array,transformation) and transform the array


arr = ['2','3','4']

function transform(i){
    return 2*i;
}

const map = (arr,transform) => {
    new_arr = [];
    for(let i = 0;i<arr.length;i++){
        new_arr.push(transform(arr[i]));
    }
    return new_arr
};

console.log(map)