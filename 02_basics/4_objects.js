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
            lastname: "ghongade"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);