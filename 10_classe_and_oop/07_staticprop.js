class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){ // कई बार ऐस बोहत सारी situtation होगी इस method का acces हर उस object को नहीं देना चाहते जो इस class से instanciate हुआ है । उसके लिए सिर्फ़ static लगदो key-word के सामने 
        return '123'
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());

class Teacher extends User {
    constructor(email, username /* order matter nhi krta*/){
        super(username)
        this.email = email
    }
}

const iphone = new User("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId())
