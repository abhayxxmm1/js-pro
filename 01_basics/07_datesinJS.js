// date javascript mdn 🔎
/*
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);   // => object [instance] ⭐
*/

// let myCreatedDate1 = new Date(2024, 06, 07, 21, 50)
let myCreatedDate2 = new Date("2024-06-07")
let myCreatedDate = new Date("06-07-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamo = Date.now()

// console.log(myTimeStamo); // millisec Values counted frm 1970
// console.log(myCreatedDate.getTime()); //while making clone 🤡
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDate());
console.log(newDate.getFullYear());

// console.log(`${newDate.getDate()} and the month ${newDate.getFullYear()} ${newDate.getMinutes()} minutes`); 

newDate.toLocaleString('default',{
    weekday: "long", // Ctrl + space [short-cut key]
 // timeZone: ''
})   // defines objects and many parameters ⭐⭐