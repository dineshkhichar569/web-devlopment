//Ternary operator
let age = 19;
((age >= 18) ? ((age >= 18 && age < 80) ? console.log("Adult") : console.log("Dead")) : ((age < 18) ? ((age < 18 && age > 14) ? (console.log("Teenager")) : (console.log("Child"))) : (console.log("Child")))) ;