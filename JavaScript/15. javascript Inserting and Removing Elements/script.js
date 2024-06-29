

let span = document.createElement("span")
span.innerHTML = "Hello, I am created in Script."
span.setAttribute("class","created")
document.querySelector(".container").prepend(span)


let inserted = document.querySelector(".container")
inserted.insertAdjacentHTML("beforebegin", "<b>This is innerAdjacentHTML.")

let inser = document.querySelector(".container")
inser.insertAdjacentHTML("afterend", "<b>This is Second innerAdjacentHTML.")

document.querySelector(".box").remove()   


document.querySelector(".container").classList.add("green")

document.querySelector(".container").classList.remove("red")

document.querySelector(".container").classList.toggle("black")
document.querySelector(".container").classList.toggle("blue")

document.querySelector(".container").classList.contains("green")