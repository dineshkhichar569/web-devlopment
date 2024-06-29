let URL = "https://catfact.ninja/fact"

let paragarph = document.querySelector(".para");
let button = document.querySelector(".btn");


let getData = async () =>{
    console.log("getting data.......")
    let promise = await fetch(URL);
    console.log(promise);
    
    // JSON format
    let data = await promise.json();
    // console.log(data)
    
    paragarph.innerHTML = data.fact
};
button.addEventListener("click", getData);








// function DATA(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", data);
//             reject("error")
//         }, 2000);
//     })
// }

// try {
//     DATA(5)   
// } catch (error) {
//     console.log(error);
// }