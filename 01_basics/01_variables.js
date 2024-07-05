const accountId = 2151711245042
let accountEmail = "ghongadeabhay60@gmail.com"
var accountPassword = "4321"
accountCity = "jalgaon"
let accountState;
// it will make undefined id no value assigned

// accountId = 2 // not allowed coz of const
// (node.js will not exicute)

accountEmail = "abhi.com"
accountPassword = "2121212"
accountCity = "bnglore"

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and fuctional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])
// node 01_basics/01_variables.js