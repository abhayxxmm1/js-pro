const user = {
  username: "abhay",
  loginCount: "8",
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // in global scope

// const promiseOne = new/*constructor function*/ Promise()
// const date = new/*constructor function*/ Date()
//  this constructor function allow,s एक ही object literal से आप  multiple instance बना सको
// new is used for making new context

function User(username, loginCount, isLoggedIn) {
  this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this // write verbos code (implicitly return define hota hai)
}

const userOne = User("hitesh", 12, true)
const userTwo = User("bumrah", 11, false) // values overright kar di

console.log(userOne.constructor);
// console.log(userTwo);


// instanceof on mdn : don,t depend on spoonfeeding