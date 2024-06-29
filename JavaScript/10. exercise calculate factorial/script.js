// write a program to calculate factorial of a number using reduce and using for loops


// let arr = [1,2,3,4,5,6,7,8,9]

// factorial = (a , b) => {
//     return a * b;
// }

// console.log(arr.reduce(factorial))

// OR       OR       OR          OR          OR         OR            OR            OR

let a = 5;
function factorials(number){
    let array = Array.from(Array(number+1).keys());
    console.log(array.slice(1))

    let c = array.slice(1).reduce((a,b) => {
        return a*b;
    })
    console.log(c)
}
factorials(a)


// OR       OR           OR            OR            OR            OR 

// let x = 5;
// function facto(number){
// let fact = 1;
// for (let i = 1; i <=number; i++) {
//     fact = fact * i;
// }
// return fact;
// }

// console.log(facto(x))