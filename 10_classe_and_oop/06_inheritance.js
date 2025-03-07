class User {
    constructor(username){
        this.username = username
    }
    /* एक method भी है इसमें logMe */
    // logMe क्या करता है username दिया है यूएस username की value set करके देता है 
    // variable inject kardiya और class ke pass current context ka access hai kui ki this. puri class mai sabb jagah available hai hi 
    logMe(){ 
        console.log(`USERNAME IS ${this.username}`); 
        
    }
}// ये तो होगया Basic class बनाना 


// लेकिन आप इस user को lms/owneer बनाना पड़ेगा कभी teacher कभी admin कभी student

/* वहाँ पे protype hua था अब extends, sugar लगा दिया गया है */
class Teacher extends User{
    constructor(username, email, password){
        /* username के लिए call करना पड़ता था 🍑 अब class का syntax है */
        /* तो फिर ये super keyword reffer करेगा की भाईसाहब कौनसी class extend कर रहे थे => user class के अंदर इस constructer मैं जाता हू this automatically BTS लेजाऊँगा उस username की value set करदूँगा, उस username की value यहाँ पर होजाएगी, और आप उसका acces directly भी ले पाओगे */
        super(username) 
        this.email = email
        this.password = password
    }
    addCourse (){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
// chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher);
