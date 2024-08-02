// कूच situation हो तो ये control execute हो "or"
// कूच situation हो तो ये control execute हो 


// if 
const isUserLoggedIn = true
const temprature = 5
/* //1️⃣ 
if (temprature === 52) {
    console.log("less than 50");
} else {
    console.log(`temprature is greater than 50 ${temprature}`);
}

console.log("execute"); 
*/

// <, >, <=, >=, ==, !=, ===, !== 


/* //2️⃣
const score = 200

if (score > 100) {
    let power = "fly"  // var is a global scope
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);
*/


/* //3️⃣
const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // 🔸2️⃣Implicite scope in 03_basics/03_Arrow.js ❌❌❌but do not write such a code


if (balance < 500) {
    console.log("less than 500");

}   else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");

} else {  // their is condition for else
    console.log("less than 1200");

}
*/

  //4️⃣
const isUserLoggedIn2 = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn2 && debitCard && 2==3 /* 2==2 ⭐all conditon true*/) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail /* multiple or can be used || ⭐one/atleast one condition true अपना  काम करुंगा condition के अंदर जाऊंगा*/) {
    console.log("User logged in");
}