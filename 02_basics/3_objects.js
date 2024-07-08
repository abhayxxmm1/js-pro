// Object.create
// singelton (object by making a conster)अपने तरेह का एक ही object है 

// object literals

const mySym = Symbol("key1") // define symbol


const jsUser = {
    name: "Abhay", // we can define keys as well as values
    "full name": "Abhay Ghongade",
    location: "jalgaon",
    email: "abh@.com",
    [mySym]: "mykey1",   // correct syntax for using symbol act as a key 💻
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(jsUser.lastLoginDays); // if key is in string then not works eg="full name":
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]); // ⭐💻


// jsUser.email = "abhay@chatgpt.com" // for changing values
// Object.freeze(jsUser) // freezes so no one could change
// jsUser.email = "abhay@madarchood.com" // not propogate(change)
// console.log(jsUser);


jsUser.greeting = function (){ // greeting is common
    console.log("Hello JS user");
}
jsUser.greetingTwo = function (){ 
    console.log(`Hello JS user, ${this.name}`);// `stringinterpolation` backticks // this(shows properties of oblect)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// umdefined ⁉️