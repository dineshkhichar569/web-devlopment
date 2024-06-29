// Question 1 //
const score = {
    Harry : 98,
    Rohan : 70,
    Aakash : 7 
}
for(i = 0; i < Object.keys(score).length; i++){
    console.log(" The Marks of " + Object.keys(score)[i] + " are " + score[Object.keys(score)[i]])
}

console.log(         )

// Question 2 //
const result = {
    Harry : 99,
    Rohan : 79,
    Aakash : 69
}
for (const key in result) {
    console.log(" The Marks of " +key+ " are " + result[key])
}


// Question 3 //
let a = -1;
if(a < 0){
    console.log("try Again")
}
else{
    console.log(a)
}

let b = 2;
(b < 0) ? (console.log("try Again")) : (console.log(b))


// Question 4 //
const mean = (x, y) => {
    return (x + y)/2;
}
let p = 8;
let q = 4;

console.log("Mean of p & q is : ",mean(p, q))