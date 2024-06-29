// let STYLE = document.querySelector(".container");

// STYLE.children[0].style.backgroundColor = "red"
// STYLE.children[1].style.backgroundColor = "green"
// STYLE.children[2].style.backgroundColor = "blue"
// STYLE.children[3].style.backgroundColor = "purple"
// STYLE.children[4].style.backgroundColor = "yellow"

// STYLE.children[0].style.color = "yellow"
// STYLE.children[1].style.color = "purple"
// STYLE.children[2].style.color = "red"
// STYLE.children[3].style.color = "green"
// STYLE.children[4].style.color = "blue"

// STYLE.children[0].style.borderColor = "green"
// STYLE.children[1].style.borderColor = "blue"
// STYLE.children[2].style.borderColor = "purple"
// STYLE.children[3].style.borderColor = "yellow"
// STYLE.children[4].style.borderColor = "red"


let boxes = document.querySelector(".container").children

function getRandomColor(){
    let c1 = Math.ceil(0 + Math.random() * 255);
    let c2 = Math.ceil(0 + Math.random() * 255);
    let c3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${c1}, ${c2}, ${c3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    e.style.borderColor = getRandomColor()
})


let color = document.querySelector(".container").children

function RANDOM(){
    let number = Math.ceil(0 + Math.random() * 100)
    
    return `${number}`
}

Array.from(color).forEach(e => {
    e.innerHTML = RANDOM()
})
