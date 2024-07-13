/* 🔸shoping cart in e-commerse website
🔸problem!! user keeps on adding multiple no. of items 
🔸so, u dont know how many no. of argument/items are going to come 
🔸then how to create parameters in function */

function calculateCartPrice(/* val1, val2, */ ...num1 /* ...is a rest/spread operator specified upon useCase */) { // also cant use two operator at time error⚠️
    return num1
}

// console.log(calculateCartPrice(200, 500, 400, 2000));


/* 🔸object pass Usecase*/
const user = {
    username: "abhay",
    price: 199
}

function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) /* functionCall */
/* handleObject({ // or like this also
    username: "sam",
    price: 99
}) */