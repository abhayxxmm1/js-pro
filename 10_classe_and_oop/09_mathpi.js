/*
 object prototype की properties inherit है और object की ख़ुद की भी properties है
जैसे की constructurs new_keyword class सब यही से चाल रहा है */

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI"); 
/*
  PI जो है property का name है और 3.14 उसकी value है || PI की value single quote double quote किसी मैं भी लिख सकते है */

// console.log(discriptor); // check this

/* 
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // value change नहीं हो रही है 🍑 किऊ नहीं हो रही 
 */

const chai = {
  name: "jinger",
  price: 243,
  isAvailable: true,

  orderChai: function () {
    console.log(`chai nhi bani /* code faat gaya */`);
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false,
    // configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { // forof loop objects के लिए easy रहता है 
  if (typeof value !== 'function') { //for handling code
    
      console.log(`${key} : ${value}`);
}
}
