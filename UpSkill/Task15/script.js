document.querySelector(".box-red").addEventListener("click",(e)=>{
    document.querySelector(".box-red").style.backgroundColor = "red"
    document.querySelector(".box-red").style.color = "white"
})
document.querySelector(".box-blue").addEventListener("click",(e)=>{
    document.querySelector(".box-blue").style.backgroundColor = "blue"
    document.querySelector(".box-blue").style.color = "white"
})
document.querySelector(".box-green").addEventListener("click",(e)=>{
    document.querySelector(".box-green").style.backgroundColor = "green"
    document.querySelector(".box-green").style.color = "white"
})
document.querySelector(".box-yellow").addEventListener("click",(e)=>{
    document.querySelector(".box-yellow").style.backgroundColor = "yellow"
    document.querySelector(".box-yellow").style.color = "white"
})


let greetPlace = document.querySelector("#greet-name")

let button = document.querySelector(".btn");
let textInput = document.querySelector("#in");

button.addEventListener("click",()=>{
    document.querySelector("#comma").innerHTML = ","
    greetPlace.textContent = textInput.value;
})