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


// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive[copy]), Heap (Non-Primitive[refrenceOfOriginalValue])

let myYtName = "abhay.com"

let anotherName = myYtName // copy in stack of myYt
anotherName = "chaiaurcode"

console.log(myYtName);
console.log(anotherName);


let userOne = { // OriginalValueRefrence in Heap
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhay@google.com"

console.log(userOne.email);
console.log(userTwo.email);