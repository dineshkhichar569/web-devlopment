let a1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let a2 = [5,6,7,8];
let a3 = [9,10,11];
console.log(a1.concat(a2, a3))


console.log(a1.slice(0,16,234,234))

let s = [9,7,5,8,4,3,7,5,8,4,8,4,7,4,7,8,5,5,4]

console.log(s.sort())

console.log(a2.splice(2,3,322,345,574))
console.log(a2)

console.log(a3.reverse())


let arr = [2,4,7,3,8,9];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    // newarr.push(element**2)
    
    // or

    newarr.push(arr[i]**2)
}
console.log(newarr)

// OR OR OR OR OR OR    O R   O R   O R   O R    OR OR OR OR OR OR OR OR

newarr = arr.map(e =>{
    return e**2;
})
console.log(newarr)








let a = [432,235,567,346];
let ab = [];

ab = a.map(e => {
    return e*2;
})
console.log(ab)

let abb = [];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    abb.push(element*2);    
}
console.log(abb)

console.log("filter.........filter.........filter")

let fill = [4,5,6,3,7,4,55,5,45,35,]
greaterthanTen = (e)=>{
    if(e<10){
        return true;
    }
    return false;
}

console.log(fill.filter(greaterthanTen))


let red =[1,2,3,4,5];

redd = (a , b) => {
    return a*b;
}
console.log(red.reduce(redd))






















// let verine = {
//     Name : "dinesh",
//     class : "BTech CSE",
//     CGPA : "9.8"
// }
// for (const key in verine) {
//     if (Object.hasOwnProperty.call(verine, key)) {
//         const element = verine[key];
//         console.log(key + ":" , element)
        
//     }
// }
