
let random = Math.ceil(0 + Math.random() * 100);
console.log(random);

let guess;
let max = 100;
let chances = 0;
while(guess!=random){
    chances = chances + 1;
    guess = prompt("enter the number : "); 
    if(guess == random){
        alert(`Guess is right. ${random} is right number. After ${chances} try correct number is Guessd.`)
        break;
    }
    else if(guess>0 && guess<random){
        alert("Your input is less then random.")
    }
    else if(guess<100 && guess>random){
        alert("Your input is greator than random.");
    }
    else{
        console.log("enter within 1 to 100.")
    }
}