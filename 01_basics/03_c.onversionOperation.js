let score = "abhay"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // NaN NotaNumber

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0


let isLoggedIn = "abhay"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abhay" => true



let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********************  Operations *********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2-2);
// console.log(2+2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " abhay"

let str3 = str1 + str2
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3 ); // do-not write tricky code

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // no value to it readibility is prior

let gameCounter = 100
gameCounter++ // prefix (valueIncementerFirst) ++gameCounter postfix (valueIncementerAfterUsage)
console.log(gameCounter);