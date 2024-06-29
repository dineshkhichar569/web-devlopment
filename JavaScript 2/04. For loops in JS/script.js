// for loop
let sum = 0;
for (let i = 1; i < 5; i++) {
    console.log(i,"@");
    sum += i;
}
console.log("Sum ==" , sum)


// for in loop
const obj = {
    name :"dinesh",
    class : "10th",
    Score : "80.80%"
}
for (const a in obj) {
    console.log(a,":",obj[a])
}


// for of loop
// IT MUST be iterable in for of loop.
// iterable means like an array, string, etc.
for (const i of "") {
    console.log(i)
}


//while loop
let j = 5;
while(j > 10){
console.log(j)
j++;
break;
}


//Do while loop
let c = 5;
 do{
    console.log(c)
    c++;
 }
 while (c < 10)