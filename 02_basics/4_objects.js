// const tinderUser = new Object() //singelton Object💻
 const tinderUser = {} // Non-singelton Object

// left ➡️ + up ⬆️ teminal copy

tinderUser.id = "123abc" // unique id देदेते है
tinderUser.name = "samm"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);
const regularUser = {
    email: "abhay@gmail.com",
    fullname: {
        userfullname : {
            firstname: "abhay",
            lastname: "ghongade" // Nesting object के अंदर object
        }
    }
}

// console.log(regularUser.fullname); 
// console.log(regularUser.fullname.userfullname); // fullname?💡
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {6: "a", 7: "b"}

// const obj3 = {obj1, obj2} // mtd 1️⃣
// const obj3 = Object.assign({}, obj1, obj2, obj4) // object assign 2️⃣

// काच का ग्लास था drop करा बिखर जाएगा spread होजाएगा. 
const obj3 = {...obj1, ...obj2} // 3️⃣🔁
// console.log(obj3);



const user = [ // array of objects from database
    {
        id: 1,
        email: "abh@gmail.com"
    },
    {
        id: 1,
        email: "abh@gmail.com"
    },
    {
        id: 1,
        email: "abh@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // => comes in array so we can apply loops ⭐⭐
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array mai array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check it has property