function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called"); /* 1️⃣ */
  
}

function createUser(username, email, password) {
//   SetUsername(username); /* 1️⃣ hame लग्राहा hai ki ye call किया  है  🍑 javascript ने sirf refrence दिया है  */

//   SetUsername.call(username); /* 2️⃣ अब ये technically call हो रहा है bcoz reference hold करके रख रहा है  */

(this.email = email), 
SetUsername.call(this, username); /* 3️⃣ मेरा वाला this नहीं आपका वाला this use करूँगा , context pass krni ki kahai this ki*/
  (this.password = password);
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
