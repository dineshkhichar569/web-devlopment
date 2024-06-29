// create a faulty calculator using javascript

// this faulty calculator does following :
// 1. It takes two numbers as input from the User 
// 2. It perform wrong operations as follows :
// + ---> -
// * ---> +
// - ---> /
// / ---> **
// it performs wrong opreation 10% of the time

// to replace anything with another thing simply write...
// "a":"b"    here, b will be replaced with a.
// probability = Math.random() to calculate
// OR    WE can replace by name.replace("a" ,"b")     here, b is replaced by a


// console.log(`${.......} ${.......} ${.......}`)   to print
// eval   =   Evaluates JavaScript code and executes it.
// alert(`the result is ${eval(`${a} ${c} ${b}`)}`)


let probability = Math.random()
let a = prompt("enter the value of a")
let b = prompt("enter the value of b")
let c = prompt("enter the operation")


let replace = {
    "+":"_",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(probability > 0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = replace[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

// let user = [];

// let a = prompt("enter the 1st values of array");
// let b = prompt("enter the 2nd values of array");
// let c = prompt("enter the 3rd values of array"); 
// let d = prompt("enter the 4th values of array");
// let e = prompt("enter the 5th values of array");
// alert(`user = ${user.push(a,b,c,d,e)}`);