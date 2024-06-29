
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

function randomDelay(){
    return new Promise((resolve, reject) => {
        timeout = Math.ceil(1 + Math.random() * 3);
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
async function main(){
    setInterval(() => {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 400);

    let text = [
        "Initializing Hacking...",
        "Reading your Files...",
        "Password files Detected...",
        "Sending all password and personal files to server...",
        "Cleaning up...",
    ];
    
    for (const item of text) {
        await addItem(item)
    }
}
main();