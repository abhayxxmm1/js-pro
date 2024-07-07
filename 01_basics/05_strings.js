const name = "abhay"
const repoCount = 10

// console.log(name + repoCount + "Value"); // this is Old

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // StringInterpolation


const gameName = new String("abhi-hc-com") // 🏃‍♂️ in browser
// console.log(gameName); // 🏃‍♂️ in browser
// console.log(gameName[1]); // here accesing keyValue Pair
// console.log(gameName.__proto__);


// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4) // 4 is not included here
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "    abhay   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abhay.com/abhay%94ghongade"

console.log(url.replace('%94', '-'));

console.log(url.includes('abhay')); 
console.log(url.includes('yumi')); 


console.log(gameName.split('-'));  // changing into array format
