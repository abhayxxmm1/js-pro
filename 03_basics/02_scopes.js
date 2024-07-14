/* 
🔸जंब तीनो variable काम कर रहे थे तो जरुरत क्या थी तीनो को लाने की 
🔸var block scope के उपर काम नही करता हे
*/

/* ⭐ global scope की कहाणी अंदर scope मै available होती है */

// var c = 300
let a = 300

if (true) { 
    /* ⚠️ block scope के अंदर की कहाणी बाहर नही जनी चाहिये */
    let a =10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
} /* curly brases हर language मै scope है 
    💥 जितनी बार curly brases आएगा उतनी बार scope आएगा */


console.log(a);
// console.log(b);
// console.log(c);




/*💻
☄️जंब आप browser मै inspect करके console मै scope अलग है 
🌠और जंब आप code environment node मै run करते है तो global scope अलग है 
*/