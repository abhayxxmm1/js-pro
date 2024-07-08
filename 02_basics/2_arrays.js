// const myArr = [1, 2, 3, 4, 5] 🏃‍♂️
const marval_heros =["thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marval_heros.push(dc_heros) // pushes same array

// console.log(marval_heros);  // =>[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marval_heros[3][1]); // =>flash {for accesing}

// const allHeros = marval_heros.concat(dc_heros) // concat returns new array
// console.log(allHeros); // => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// काच का ग्लास था drop करा बिखर जाएगा spread होजाएगा. 
const all_new_heroes = [...marval_heros, ...dc_heros, ...dc_heros] // spread out values milengi ek ek element millega


// console.log(all_new_heroes);

const another_arrray =[1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_arrray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Abhay"));
console.log(Array.from("Abhay"));
console.log(Array.from({name: "abhay"})); // intresting 💻

let scor1 = 100
let scor2 = 200
let scor3 = 300

console.log(Array.of(scor1, scor2,scor3));