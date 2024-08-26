const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})
// personaly map acha lagta hai forEach see


/* 🔸chaining by maps */
const newNums = myNumbers
                .map((num) => num * 10 ) // sabhi return hoga 
                .map( (num) => num + 1 )
                .map( (num) => num - 3 )
                .filter((num) => num >= 40) // true or false 
/* Indendt |Tab space|  */
console.log(newNums);
