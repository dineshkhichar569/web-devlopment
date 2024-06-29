
// function Box(boxes) {
//     let container = document.querySelector(".container");


//     for (let i = 1; i <= 10; i++) {
//         let box = document.createElement("div")
//         box.classList.add("bo");
//         container.appendChild(box)
//     }
// }
// Box();




function Videos(number, image, heading, channelName, Views, old){
    
    let VEIWS = Math.ceil(0 + Math.random()*10000000);
    if(VEIWS < 1000){
        views = VEIWS;
    }
    else if(VEIWS > 1000 && VEIWS < 1000000){
        views = Math.ceil(VEIWS/1000) +"K";

    }
    else{
        views = Math.ceil(VEIWS/1000000) +"M"
    }

    let html = 
    `<div class="container">
        <div class="box">
            <div class="number">${number}</div>
            <div class="img">
                <img src="${image}" height="120px" alt="">
            </div>
            <div class="information">
                <div class="heading">${heading}</div>
                <div class="about">${channelName} . ${views} ${Views} . ${old}</div>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


Videos("1.", "2.png", "fdvdfbdfb", "JustCode", "wdfg", "asfgv");



let Button = document.querySelector("button");
Button.addEventListener("click", (e) => {
    Videos("2", "2.png", "fdvdfbdfb", "JustCode", "Views", "asfgv");
})
