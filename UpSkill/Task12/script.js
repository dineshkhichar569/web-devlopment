let num = 153

let func = n =>  Number(n);    
let a = String(num);
let arr = Array.from(a, func);


///////////////////////////////////// Sum of digits ///////////////////////////////////////////////////////////
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
 }
console.log(sum);


//////////////////////////////////// Prime number /////////////////////////////////////////////////////////////
let prime = true;
for (let i=2; i<num-1; i++) {
    if(num%i==0){
        prime = false;
    }
}
if(prime == true){
    console.log(num,"is a Prime number.");
}
else{
    console.log(num,"Not a Prime number.");
}




/////////////////////////////////////////////// Armstrong number //////////////////////////////////////////////
let arms = 0;
for (let i = 0; i < arr.length; i++) {
    arms = arms + arr[i]**3;
}
if(arms%num==0){
    console.log("Yes, it is Armstrong number.");
}
else{
    console.log("No, it is Armstrong number.");
}




/////////////////////////////////////////////// Factor ///////////////////////////////////////////////////////
console.log("factors of",num,"are : ");
for (let i = 1; i <= num; i++) {
    if(num%i==0){
        console.log(i);
    }
}