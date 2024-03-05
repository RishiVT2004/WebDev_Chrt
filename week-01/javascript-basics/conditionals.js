//if 
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

// if-else
let num1 = 3
if (num1 > 0) {
  console.log(`${num1} is a positive number`)
} else {
  console.log(`${num1} is a negative number`)
} 

// if -else if - else:

let count = 10

if(count%2==0){
    console.log(`${count} is even`);
}else if(count%2 != 0){
    console.log(`${count} is odd`)
}else{
    console.log('error')
}

// switch 

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

//ternary 

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')