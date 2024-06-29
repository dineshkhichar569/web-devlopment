function algebra(x, y){
    return Math.ceil(((x+y)*(x/y)-(x*y)/(x-y)));
}

let a = 4;
let b = 8;
let c = 6;

console.log(algebra(a, b))
console.log(algebra(a, c))
console.log(algebra(b, a))
console.log(algebra(b, c))
console.log(algebra(c, a))
console.log(algebra(c, b))

console.log(    )
console.log(    )
// Arrow Functon //
const arrowFunc = (i, j) =>{
    return Math.ceil(((i**j)**i)/j)
}
let p = 2;
let q = 5;
let r = 7;
console.log(arrowFunc(p, q)) 
console.log(arrowFunc(p, r)) 
console.log(arrowFunc(q, p)) 
console.log(arrowFunc(q, r)) 
console.log(arrowFunc(r, p)) 
console.log(arrowFunc(r, q)) 