// Question 1
let age = 15;
if(age >= 10 && age <= 20){
    console.log("Lies B/W 10 and 20.")
}
else{
    console.log("Do not lies.")
}


// Question 2
let x = 12
switch (x) {
    case (12):
        console.log("drive.")
        break;
    case (13):
        console.log("can't.")
    default:
        break;
}


// Question 3
let num = 18;
if((num % 2 == 0) && (num % 3 == 0)){
    console.log("divisible by 2 and 3.")
}
else{
    console.log("not divisible.")
}


// Question 4
let n = 15;
if((n % 2 == 0) || (n % 3 == 0)){
    console.log("divisible by either 2 or 3.")
}
else{
    console.log("not divisible.")
}


// Question 5
let a = 19;
(a >= 18) ? (console.log("you can drive.")) : (console.log("you can't drive."))