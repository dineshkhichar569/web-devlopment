function createdCard(title, channelName, views, time, duration, thumbnail){

    let Views ;
    if(views < 1000){
        Views = views;
    }
    else if(views > 100000)
    {
        Views = Math.ceil(views/100000) + "M";
    }
    else{
        Views = Math.ceil(views/1000) + "K";
    }

    let Old ;
    if(time <= 12){
        Old = time + " months";
    }
    else{
        Old = Math.ceil(time/12) + " years"
    }
        
    let html = `<div class="container">
    <div class="thumbnail"> <img src="${thumbnail}" alt=""></div>
    <div class="info">
        <div class="intro"><h1>${title}</h1></div>
        <div class="intro">${channelName} . ${Views} views . ${Old} ago</div>
    </div>
    <div class="duration">${duration}</div>
    </div>`

    document.querySelector(".Card").innerHTML = document.querySelector(".Card").innerHTML + html
}

function randomViews(){
    let veiws = Math.ceil(1 + Math. random() * 1000000);
    return `${veiws}`
}

function randomMonths(){
    let old = Math.ceil(0 + Math. random() * 72);
    return `${old}`
}


let clickMe = document.querySelector(".more")
clickMe.addEventListener("click", () =>{
    createdCard("#100DaysofCode", "Just Code", randomViews(), randomMonths(), "35:20", "2.png")
})