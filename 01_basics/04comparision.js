// console.log(2 > 1);   // ✅
// console.log(2 >= 1);   // ✅
// console.log(2 < 1);   // ✅
// console.log(2 <= 1);   // ✅
// console.log(2 != 1);   // ✅


// console.log("2" > 1);    // ❗ data type must be same while comparing ↔️
// console.log("02" > 1);   // ❗        

console.log(null > 0);   // avoid 🚫
console.log(null == 0);   // avoid 🚫
console.log(null >= 0);   // avoid 🚫


console.log(undefined == 0);   // avoid 🚫
console.log(undefined > 0);   // avoid 🚫
console.log(undefined < 0);   // avoid 🚫

// ===

console.log("2" === 2);