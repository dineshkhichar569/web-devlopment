async function additem(inner) {
    let div = document.createElement("div")
    div.innerHTML = inner;
    await randomly();
    document.body.append(div)
}

async function randomly() {
    return new Promise((resolve, reject) => {
        let timeset = Math.ceil(1 + Math.random() * 3)
        setTimeout(() => {
            resolve()
        }, timeset * 1000)
    })
}


function dots() {
    setInterval(() => {
        let last = document.body.lastElementChild;

        if(last.innerHTML.endsWith("!!!")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "!"
        }
    }, 300);
}
dots();

async function main() {

    let text = [
        "Who are you ",
        "Why are you ",
        "Where are you ",
        "How are you ",
        "I am Good ",
        "No, you are Not ",
    ];

    for (const item of text) {
        await additem(item);
    }
}
main();


