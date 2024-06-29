function getRandomColor(){
    let c1 = Math.ceil(0 +  Math.random() * 255)
    let c2 = Math.ceil(0 +  Math.random() * 255)
    let c3 = Math.ceil(0 +  Math.random() * 255)

    return `rgb(${c1}, ${c2}, ${c3})`
}

setInterval(() => {
    document.querySelector(".box").style.backgroundColor = getRandomColor()
},1000)

let redirectButton = document.querySelector(".GO");

function GoToFunction(){
    window.location.href = "https://www.google.com";
}

redirectButton.addEventListener("click",GoToFunction);
