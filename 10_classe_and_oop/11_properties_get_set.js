// पहले तो classes नहीं होती थी तो ऐसे होता था 

function User(email, password){
    this._email = email;
    this._password = password;

    /* function अपने ऐप मैं object भी है और function भी है 
        तो object की properties को भी call कर सकते हो 
        parameters (इस method का this नहीं hota है, कौनसी property overwrite करना चाहते हो, {Object इसके अंदर जो भी properties define करना चाहते हो krr सकते ho} )   */    
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@gmail.com", "chai")

console.log(chai.email);
