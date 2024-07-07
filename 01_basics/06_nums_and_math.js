const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // converting type of to string to get more properties
// console.log(balance.toFixed(2)); // =>100.00 while makeing e-commerse application for precision

const otherNumber = 1123.8966 // 23.8966=> 23.8
// 1123.8966=> 1.12e+3
// console.log(otherNumber.toPrecision(3)); // 123.8966=> 124

const hundreds = 1000000 // toLocaleString()=> 1,000,000
// console.log(hundreds.toLocaleString('en-In')); // 10,00,000

// Min_Value Max_Value by [Number.] in browser 🏃‍♂️

// ++++++++++++++++++++ Maths +++++++++++++++++++++++
// library by-default

/*
console.log(Math); // console.log(Math); in browser 🏃‍♂️
console.log(Math.abs(-4)); // .abs changes -ve => +ve
console.log(Math.round(5.7)); // => 6 ⭐
console.log(Math.ceil(4.2)); // => 5 [top value]
console.log(Math.floor(4.2)); // => 4 [lowest value]

console.log(Math.min(1, 2, 0.2, 0.314521 , 0.00032));
// finds min value in a array
console.log(Math.max(1, 2, 0.2, 0.314521 , 0.00032));
// finds max value in a array
*/
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// ⭐⭐⭐
console.log(Math.floor(Math.random() * (max - min + 1))+ min); 
