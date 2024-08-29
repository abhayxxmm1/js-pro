// shopping cart addition of total price

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);


// example 

const shoppingCart = [
    {
        itemname: "lana",
        price: 2999
    },
    {
        itemname: "mia",
        price: 999
    },
    {
        itemname: "lexi",
        price: 5999
    },
    {
        itemname: "alyx",
        price: 12999
    },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(total);
