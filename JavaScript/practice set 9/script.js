// Q.1

// function getData(data){
//     return  new Promise((resolve, reject) => {

//             resolve("success")
//             reject("error")
//             document.head.appendChild(script);
//     })
// }

// getData().then((succ) => {
//     alert(succ);
// }).catch((err) => {
//     alert(err);
// })


// Q.2

// async function getData(data){
//     return  new Promise((resolve, reject) => {

//             resolve("success")
//             reject("error")
//             document.head.appendChild(script);
//     })
// }

// ( async function () {
//     await getData(alert("success"))
// } )();


// Q.3

// OR
                                                            ////////// Error handling example ///////////

// async function GetData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            reject("Error")
//         //    resolve("success")
//         }, 3000)
//     })
// }

// async function get(){
//     try {
//         const result = await GetData();
//         console.log("Output :", result);
//     } catch(err){
//         console.log(err)
//     }
// }
// get();


// Q.4

function GetData1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success 1")
        }, 3000)
    })
}
  
function GetData2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success 2")
        }, 2000)
    })
}
  
function GetData3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success 3")
        }, 1000)
    })
}

async function Get(){
    const result1 = await GetData1();
    const result2 = await GetData2();
    const result3 = await GetData3();

    console.log(result1, result2, result3)
}

async function Gget(){
    const[result1, result2, result3] = await Promise.all([
        GetData1(),
        GetData2(),
        GetData3()
    ])
}

Get();
Gget();