// let my= "abhay     "
// let myluck = "zatu  ";


// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.abhay = function(){
    console.log(`abhay is present in all oblects`);
    
}

Array.prototype.heyAbhay = function () {
    console.log(`abhay says helllo`);
    
}


// heroPower.abhay()
myHeros.abhay()
myHeros.heyAbhay()
// heroPower.heyabhay()

// ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷ INHERITANCE ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssingment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // taking refrence or borowing properties by sing this syntax/keyword
}

/* we can take acess from out side also */
Teacher.__proto__ = User 
// teacher bhi user ki sari properties access krr sakta hai
// kisi aur ki properties ko kaise access krr sakte hai yahi prototypal inheritance hai

/* modern syntax */
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CanISmellUrPantiess      "

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()