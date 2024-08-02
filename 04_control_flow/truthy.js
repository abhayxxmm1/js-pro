// const userEmail = "@bhay.ai"// string के अंदर मान लिया गया है कि truthy value hai
// const userEmail = ""// string के अंदर मान लिया गया है कि falsy value hai

const userEmail = []// Array के अंदर मान लिया गया है कि truthy value hai

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("Dont have user email");
    
}


/* falsy values 🔕
false, 0, -0, BigInt 0n, "", null, undefined, NaN
 */

/* truthy values 🔔
"0", 'false',  "  ", [], {}, function(){}
 */


// +++++++++++++ How to detect Array or Object is empty❔

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

/* 
false == 0     => true
false == ''    => true
0 == ''        => true
 */


// Nullish Coalescing Operator (??): null Undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
var1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 30 // jo first ata hai vo assign hota jaise 10




console.log(val1);
console.log(var1);


//++++++++++++ Terniary Operator not same to nullish Coalescing Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

