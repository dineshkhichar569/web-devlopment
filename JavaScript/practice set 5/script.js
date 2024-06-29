// let arr = [1,2,3,4,5];
// console.log(typeof arr)

// let a = [1,2,3,4,5];

// a = a.map(e => {
//     return e**2;
// })
// console.log(a)

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     a.push(element*3);
// }
// console.log(a)


// let array = [1,2,3,4,5,6,7,8,9,0];

// function filterrr (e){
//     if(e>5){
//         return true;
//     }
//     return false;
// }
// console.log(array.filter(filterrr))



// Q.1

let number = [];
let SizeOfArray = (prompt("size of an array"));
for (let i = 0; i < SizeOfArray; i++) {
    let input = prompt(`Enter the numbers ${i}`);
    if(input > 0 || input< 0){
        number.push(input);
    }
    else{
        alert(`array = ${number}`)
        break;
    }

}
alert(`array = ${number}`);



// Q.4

let arr = [1,2,3,4,5];
let newarr = [];

newarr = arr.map(e => {
    return e*2;
})
console.log(newarr);

let fill = [10,20,45,23,70,100];

divisible = (e) => {
    if(e%10==0){
        return true;
    }
    return false;
}

console.log(fill.filter(divisible));


// Q.5

let array = [];

let ArraySize  = prompt(`size of array :`);

for (let i = 0; i < ArraySize; i++) {
    let input = prompt(`enter array elements : ${i}`);
    array.push(input);
}
alert(`array : ${array}`);

function factorial(a,b) {
    return a*b;
}
let output = array.reduce(factorial);
alert(output);



