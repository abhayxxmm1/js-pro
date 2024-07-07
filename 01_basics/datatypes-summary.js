// primitive (callByValue)

// 7 types(thala7️⃣) : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // dynamically type lang coz it takes any dataTypes
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // => Object
let userEmail; // => undefined

const id = Symbol('123')  // => symbol
const anotherId = Symbol('123') // => symbol

// console.log(id === anotherId);

const bigNumber = 6565164448484564884648n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "thanos"] // heros=> Obje
let myObj = { // => Object
    name: "abhay",
    age: 22,
}

const myFunction = function () { // myFunction(returns)=> functionObject
    console.log("Hello world");
}


console.log(typeof myObj);