// the javascript we are useing is after ES6 और ये Syntactic sugar ही है अभी भी ।

// Syntactic sugar refers to certain language features in programming that make the code easier to read or write

class User { // class अब एक key-word है JS मैं
    constructor(username, email, password){
        /* for context =>*/ this.username = username ;
        this.email = email;
        this.password = password
    }
    
    // password CLEAR_TEXT_FORMAT मैं तो नहीं रखोगे means unencrypted
    encryptPassword(){ // है तो ये भी function ही पर class के अंदर है तो method बोलने लग गये 
        return /* variable ले लेते है ${}*/`${this.password}abc`

    }

}

//  इससे अब एक user बना लेते है chai ⏚
const chai = new User("chai", "chai@gmail.com","123")

console.log(chai.encryptPassword());
