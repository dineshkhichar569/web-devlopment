document.querySelector(".Son").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("hi")
})


document.querySelector(".Father").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("hi")
})


document.querySelector(".GrandFather").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("hi")
})

let timerId = setTimeout (() => alert("never"), 1000);

clearTimeout(timerId)

function getRandomColor(){
    let c1 = Math.ceil(0 + Math.random() * 255);
    let c2 = Math.ceil(0 + Math.random() * 255);
    let c3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${c1}, ${c2}, ${c3})`
}
setInterval(() => {
    document.querySelector(".Son").style.backgroundColor = getRandomColor()
    document.querySelector(".Son").style.color = getRandomColor()
    document.querySelector(".Father").style.backgroundColor = getRandomColor()
    document.querySelector(".GrandFather").style.backgroundColor = getRandomColor()
}, 200);

// setTimeout(() => {
//     document.querySelector(".Son").style.backgroundColor = getRandomColor()
//     document.querySelector(".Son").style.color = getRandomColor()
//     document.querySelector(".Father").style.backgroundColor = getRandomColor()
//     document.querySelector(".GrandFather").style.backgroundColor = getRandomColor()
// }, 1000);