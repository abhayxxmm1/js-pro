const coding = ["js", "ruby", "java", "python", "cpp"]
 
/*--- variation 1 for printing by function---*/
coding.forEach( function (val) {
    // console.log(val);
    
} )


/*--- variation 2 for printing by arrow function---*/

coding.forEach( (item)  => {
    // console.log(item);
    
} )


/*--- variation 3 for printing by ---*/

function printeMe(item) {
    console.log(item);
    
}

coding.forEach(printeMe())