class User {
  // under the hood protoype ही चल रहा है.ये सब rapper hai 
  constructor(email, password) {
    this.email = email;
    this.password = password
  }
  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    return this._email = value 
    /*  get और set मैं race लग जाती है 
    > उसका soln is this._properties	 */
  }

  get password() {
    // जितने भी properties बनाते हो उससे getters और setters method बन्न जाते है  
    // return this._password.toUpperCase();
    return `${this._password}proCoder`
  }

  set password(value) {
    /* getter define किया है तो setter भी define करना पड़ेगा 
      > getter और setters by defaut हर code मैं होते है 
      > hard coding, fixed values or data are written directly into the source code of a program. 
      > whereas in soft coding, data or configuration information is stored in a separate location, such as a configuration file or database, and read into the program at runtime. 
        */
    this._password = value.toUpperCase();

  }
}

const hitesh = new User("hi@hitesh.ai", "worldsGreatest");

console.log(hitesh.password);
console.log(hitesh.email);

/* ⭐️ कई बार हमे fine grain control चाहिए होता 
>   है की password नहीं बताऊंगा 
>   की या फिर encrypted password return दु 

>   jo properties ka access सबको नहीं देना चाहते
>   या फिर कोई लेना चाहता है acess to fir उसमे customize code kr सकते है .
>   in sab senarios ke liye geeters or setters istamal kiye jata hai
 */
