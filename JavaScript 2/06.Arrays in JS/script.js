let arr1 = [12,234,2341,342,14]

let arr2 = [123,356,4523,245,2534]

let arr3 = ["hello",3124, 124, 124]

let allARR = arr1.concat(arr2, arr3);

console.log(allARR)

let compare = (a, b) =>{
    return a - b
}
let num = arr1.sort(compare)
console.log(num)

console.log(arr2.sort())

let arr = [2,4,5,23,6,3,6,3]

console.log(arr.length)
console.log(arr.slice(1),arr.length)
console.log(arr.splice(1,2,"we","are"))