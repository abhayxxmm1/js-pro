// for 

for (let index = 0/* is statement main loop kabhi aega hi nahi baadmaii */; index < 10/*↙️ cond checking hoti hai ⬅️⬅️*/;/*⬅️⬅️*/ index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);//↙️database ko call karna hai/ print karana hai ye sab kam hoga 
    
/* just block scope khatam hone se pahele index ki value ko badha deta hai (↗️execution control)*/}

// console.log(element);


for (let i = 1; i <= 10; i++) {
/*     console.log(`
        Outer loop value: table no.${i}
        `);
    
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
        console.log(`${i}  *  ${j}   =   ${i*j}`);
                
        
    }    
 */}


 let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
 }


 for (let index = 0; index <= 10; index++) {
    // console.log(`${index}`); // done
    if (index == 0) {
        // console.log(`Fuck off Bitch ${index}`);
        
    }
 }




// 🔸break and continue

/* for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // contol flow ko break karke block scope sidha jump karke sidha line 60 pe bahar
    }
    console.log(`${index}`);
    
}
 */

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // continue ek bar skip kardo `ignore ` no 5 is printed
    }
    console.log(`${index}`);
    
}