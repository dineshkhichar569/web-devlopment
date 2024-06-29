let age = 1;
if(age >= 10 && age <= 20){
    console.log("age of person between 10 and 20.")
}

else{
    console.log("not between 10 and 20.")
}

// OR using ternary operator

(age>=10 && age<=20) ? (console.log("yes")) : (console.log("no")) ;







let x = 18;
if(x % 2 == 0 && x % 3 == 0){
    console.log("Divisible");
}
else{
    console.log("Not Divisible");
}

// using ternary operator

(x % 2 == 0 && x % 3 == 0) ? (console.log("Divisible")) : (console.log("Not divisible")) ;





let y = 6 ;
if(y % 2 == 0 || y % 3 == 0){
    console.log("Divisible");
}
else{
    console.log("Not Divisible");
}

// using ternary operator

(y % 2 == 0 || y % 3 == 0) ? (console.log("Divisible")) : (console.log("Not divisible")) ;