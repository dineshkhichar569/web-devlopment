let classAdd = document.querySelector(".container")
classAdd.classList.add("class","add")

classAdd.innerHTML = "<b> Hi </b>"

classAdd.style.backgroundColor = "red"
classAdd.style.height = "200px"
classAdd.style.width = "1400px"
classAdd.style.fontSize = "150px"
classAdd.style.cursor = "pointer"

classAdd.addEventListener("click", (e) => {
    document.querySelector(".add").innerHTML = "Bye"
    document.querySelector(".container").style.color = "white"
    // alert("click")
})

document.addEventListener("keyup", (e) => {
    document.querySelector(".add").innerHTML = "Bye"
    document.querySelector(".container").style.color = "white"
    // alert("click")
})

