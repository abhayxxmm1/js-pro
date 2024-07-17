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


chai()