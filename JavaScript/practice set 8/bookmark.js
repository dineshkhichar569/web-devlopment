// let inputOne = document.getElementById("store");
// let inputTwo = document.getElementById("web");

// let outPut = document.querySelector(".stored");

// let BUTTON = document.querySelector(".button");


// BUTTON.addEventListener("click", () => {
//     const input1 = inputOne.value;
//     const input2 = inputTwo.value;
    
//     const newValue = document.createElement('a');

//     // a.href = URL;

//     newValue.textContent= input1 +' '+ input2;

//     outPut.append(newValue);
//     inputOne.value = ' ';
//     inputTwo.value = ' ' ;
// });





let input1 = document.getElementById("IN1");
let input2 = document.getElementById("IN2");
let BUTTON = document.querySelector(".button");
let Store = document.querySelector(".stored");

BUTTON.addEventListener("click", () => {
    
// To link button and input. 
    let text1 = input1.value;
    let text2 = input2.value;

//To link input text content to print somewherelse 
    Store.textContent = text1 +' '+ text2;
})