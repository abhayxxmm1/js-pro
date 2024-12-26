const user = {
    username: "abhay",
    loginCount: "8",
    signedIn: true,

    getUserDetails: function () {
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // in global scope

// const promiseOne = new/*constructor function*/ Promise()
// const date = new/*constructor function*/ Date()

// 21