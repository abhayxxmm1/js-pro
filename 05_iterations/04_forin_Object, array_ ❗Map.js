/*----⬇️ forin loop on Object ----*/

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


/*----⬇️ forin loop on array ----*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key, programming[key], `${programming[key]}`);
    
}


/*----⬇️ forin loop on maps ----*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(`${map[key]}`);
    /*❗ Forin loop not works on maps because it is not iterable */
    
}