// For of 

// ["", "" ,""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr/* object  से मतलब ये है कि कीस चीज पे loop lagana hai*/) {
    // console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}



const myObject = {
    Game1 : 'NFS',
    Game2 : 'bgmi',
}

// for (const [G, values] of myObject) {
//     console.log([G, ':-', values]);
    /*❗ Forof loop does not works for object */
// }