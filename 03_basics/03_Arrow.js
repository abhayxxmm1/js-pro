const user = {
    username: "abhay",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // this is used for refering current context here current context is between object for acccesing scope-variables
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" //context change kar diya (matlab ye chheej hai kis bare mai)
// user.welcomeMessage()

// console.log(this); // current context => empty Object
/* console.log(this) 🏃‍♂️🌐 biggest globle Object in 🌐 browser is "Window(capture's event)"*/ 

/* 
function chai(){
    let username = "abhay"
    console.log(this.username); // => undefined
}

chai() 
*/

/* 
const chai = function () {
    let username = "abhay"
    console.log(this.username); // इसको भी नही पता
}
*/

/*       Now 💠Arrow function         */

const chai = () => {
    let username = "abhay"
    console.log(this);  // => {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/*          🔸2️⃣Implicite return     */
// const addTwo = (num1, num2) =>  num1 + num2

/*          🔸3️⃣Paramthesis use    */
// const addTwo = (num1, num2) =>  ( num1 + num2 ) // useful while react

const addTwo = (num1, num2) =>  ( {username: "hitesh"} )

console.log(addTwo(4,9));





const myArray = [2, 5, 4, 7, 8]

// myArray.forEach(function () {}) // eg of correct syntax
// myArray.forEach(() => {})
// myArray.forEach(() => ())