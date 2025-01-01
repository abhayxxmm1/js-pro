function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5)); // function function भी है 
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // function object भी है 
// prototype कि भी properties होती है

function createUser (username, score){
    this.username = username 
    this.score = score
}


createUser.prototype.increament = function () {
    
}