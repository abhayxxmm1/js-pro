// let my= "abhay     "
// let myluck = "zatu  ";


// console.log(myName.truelength);


let myHeros = ("thor", "spiderman")

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

// heroPower.abhay()
myHeros.abhay()