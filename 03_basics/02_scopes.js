/* 
🔸जंब तीनो variable काम कर रहे थे तो जरुरत क्या थी तीनो को लाने की 
🔸var block scope के उपर काम नही करता हे
*/

/* ⭐ global scope की कहाणी अंदर scope मै available होती है */

// var c = 300
let a = 300

if (true) { 
    /* ⚠️ block scope के अंदर की कहाणी बाहर leak नही जानी चाहिये */
    let a =10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);
} /* curly brases हर language मै scope है 
    💥 जितनी बार curly brases आएगा उतनी बार scope आएगा */


// console.log(a);
// console.log(b);
// console.log(c);


/*
💻
☄️जंब आप browser मै inspect करके console मै scope अलग है 
🌠और जंब आप code environment node मै run करते है तो global scope अलग है 
*/



/*
Part 2️⃣
💠Nested scope 
💡छोटा बच्चा बडो से ice-cream मांग सकता है लेकीन, बडे छोटे बच्चो से ice-cream नही मांग सकते 
💠closure(basic not detailed) child func can access parent variable
similar to this nested scope works 
*/

function one() {
    const username = "abhay"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    /* जितनी बार func declare ओर call करते है उनके लिये अलग से call stack बनता है  */
    // console.log(website /* error❌ */);

    two() // execution

}

// one ()



if (true) {
    const username = "abhay"
    if (username === "abhay") {
        const website = " study"
        // console.log(username + website);
    }
    // console.log(website /* error❌ */);
}

// console.log(username /* error❌ */);



// +++++++++++++++++ intresting +++++++++++++++++

console.log(addOne(5)); // func is only declared so no error

function addOne(num) {
    return num + 1
}

// addTwo(5 /* error❌ */) /* coz of ||hoisting|| func is declared & holded in variable */

const addTwo /* callAs"Expression" like variable very powerfull it can hold JSON values, func almost anyting can be hold inside variable */ = function (num) {
    return num + 2
}

addTwo(5)