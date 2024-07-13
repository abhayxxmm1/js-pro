// code ko package mai band kar diya hai
function sayMyName() { // scope, defination
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// sayMyName'is_refrence' ()'is_execution'
// ⬆️⬆️⬆️useful while react or onclick & dom Manipulation
// sayMyName()



/*

function addTwoNumbers(number1, number2){ //(number1, number2)Parameters
    console.log(number1 + number2); // type 1️⃣
}
addTwoNumbers(3, "a") // (3, 4)Arrgument
addTwoNumbers(3, "4")
addTwoNumbers(3, null)

const result = addTwoNumbers(3,5)
// problem ⬇️ 
console.log("Result: ",result);

*/

function addTwoNumbers(number1, number2){ //(number1, number2)Parameters
    
    let result = number1 + number2 // type 2️⃣
    /* console.log("abhay"); */
    return result
    console.log("abhay"); // this is unreachable code coz of return

    /* return number1 + number2 */ // type 3️⃣
    // return सिर्फ variable से store कर सकते है | नाकी console log se ⭐
}

const result = addTwoNumbers(3,5)
// console.log("Result: ",result); // =>Undefined for type1️⃣ & 8 for 2️⃣




function logInUserMessage(username /* = "sam |so no reuqurment of if statement"  */) {
    if (!username/* username=== undefined */) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage(/* when u not pass nothing */)); 