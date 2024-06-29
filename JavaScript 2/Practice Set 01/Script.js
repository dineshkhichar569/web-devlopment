// Question No. 1
let String = "hello"
let Number = 6

console.log(String  + Number)


// Question No. 2
console.log(typeof(Number))
console.log(typeof(String))


// Question No. 3
// const a = {
//     name : "dinesh",
//     section : 1                          // You cannot change a const objest to hold a number later.
// }
// a = 324
// console.log(a)


// Question No. 4

const b = {
    name : "dinesh",
    class : "12th" 
}
b['section'] = "I"
console.log(b) 


// Question No. 5

const Dict = {
    Weird : "strange and unusual",
    ominous : "suggesting that something bad is going to happen",
    liaise : "to work closely with a person, group, etc. and give him/her/it regular information about what you are doing",
    latter : "nearer to the end of a period of time",
    vulnerable : "weak and easy to hurt physically or emotionally"
}
console.log(Dict)
console.log()

console.log(Dict.ominous)
//or
console.log(Dict['latter'])