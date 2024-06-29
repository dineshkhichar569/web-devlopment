// sample program to demostarate for in loop in js

let resume = {
    Name: "Dinesh Khichar",
    Experince: "Web Developer",
    CGPA: "9.5",
    Program: "CSE"
};

for (let key in resume) {
    console.log(key + ':',resume[key] )
}

// sample program to demostrate for of loop

// let Work = {
//     Name: "Dinesh Khichar",
//     Class: "12th",
//     Subject: "Maths",
//     Percentage: "86%"
// };
// for (const iterator of object) {
    
// }


// sample program to demostrate while loop

let x = 0;
while(x < 5){
    console.log(x)
    x++;
}


// sample program to demostrate while loop
console.log("do.....while loop")

let y = 4;
let z = 2;
do{
    w = y/z;
    console.log(w);
    y++;
}
while( y < 11 )

// function
console.log("function")

function sum(a , b){
    c = a + b;
    console.log(c);
}
sum(3 , 5);

// another way to use function

function add (i , j) {
    k = i + j;
    return k;
}
let l = add(3 , 9);
console.log(l);


// Q.4
console.log("Q.4")
{
    function mean (a,b,c,d,e){
        x = (a+b+c+d+e)/5;
        return x;
    };
    let M = mean(3,6,3,7,4);
    console.log(M);
}

// Q.3
// console.log("Q.3")
// {
//     do{

//         console.log("try again")
//     } while()
// }

// Q.2
console.log("Q.2")
{
    let Marks = {
        Harry : "98",
        Rohan : "70",
        Aakash : "7"
    }
    for (let key in Marks) {
        console.log(key + ':',Marks[key])
        }
}

// Q.1
console.log("Q.1")
{
    let Marks = {
        Harry : "98",
        Rohan : "70",
        Aakash : "7"
    }
}

    // for in loop 
    // console.log(key + ':', object[key])