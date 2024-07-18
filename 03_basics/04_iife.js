// Immediately Invoked Function Expression (IIFE)
// 💻 globle scope के polution से problem होती है कई बार तो globle scope जो भी variable या declaration से polution हटाने के लिये हमने IIFE का इस्तेमाल किया 

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name /* parameter pass */) => { 
    // un-named IIFE
    console.log(`DB CONNECTED TWO ${name /* parameter pass */}`);
})('abhay')