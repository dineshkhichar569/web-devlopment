let array = [4, 8, 2, 11, 2, 7, 10];

/////////////////////  MAXIMUM NUMBER         /////////////////////////////////////
let greator = 0;
for (let k = 0; k < array.length; k++) {
    const element = array[k];
    if(element > greator){
        greator = element;
    }
}
console.log("Maximum number in Array :", greator)


////////////////////   SUM OF ALL ELEMENTS   /////////////////////////////////////

let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
}
console.log("Sum of elements of an Array : ",sum);


///////////////////    COUNT OF ODD NUMBERS /////////////////////////////////////
let count = 0;
for (let j = 1; j < array.length; j++) {
    const element3 = array[j]; 
    if(element3%2!=0){
        console.log(element3)
        count++;
    }
}
console.log(count, "Odd numbers are there.");