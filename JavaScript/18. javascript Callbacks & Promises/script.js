// console.log("I am first");

// setTimeout(() => {
//     console.log("I am Inside");
// },0);

// console.log("I am Last");


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a, b, sumcallback){
//     sumcallback(a,b);
// }
// calculator(1, 3, sum)

// Nested for loop

// for(let i=0 ; i<=5 ; i++){
//     let str = " ";
//     for(let j=0 ; j<=5 ;j++){
//         str = str + j;
//     }
//     console.log(i, str)
// }

// Callbacks  Callbacks    Callbacks    Callbacks     Callbacks    Callbacks    Callbacks    Callbacks    Callbacks    Callbacks    Callbacks

// function DATA(dataGet, dataGetNext){
//     setTimeout( () => {
//         console.log("Data",dataGet);
        
//         if(dataGetNext){
//             dataGetNext();
//         }
//     }, 2000);
// }

// DATA(1,() => {
//     console.log("Geeting data 2.....");
//     DATA(2,() => {
//         console.log("Geeting data 3.....");
//         DATA(3, () => {
//             console.log("Geeting data 4.....");
//             DATA(4, () => {
//                 DATA("fuck off");
//             });
//         });
//     });
// });


// Promises Promises  Promises  Promises  Promises Promises Promises promises promises Promises promises promises promises promises
// Promises Promises  Promises  Promises  Promises Promises Promises promises promises Promises promises promises promises promises

// let promise = new Promise((resolve, reject) => {
//     console.log("Promise")

//     resolve(23456);
// })

// function DaTa(data, nextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data : ", data);
//             resolve("Done")
//             if(nextData){
//                 nextData();
//             }
//         }, 5000)
//     })
// }

// function getPromise(){
//     return new Promise((resolve,reject) => {
//         console.log("Hello! I am Promise.")
//         resolve("Solved");
//         // reject("Error");
//     })
// }

// let prom = getPromise()

// prom.then((res) =>{
//     console.log("then", res)
// })

// prom.catch((err) => {
//     console.log("catch",err)
// })

// Promise Chain  Promise Chain  Promise Chain  Promise Chain  Promise Chain  Promise Chain   Promise Chain   Promise Chain  
// Promise Chain  Promise Chain  Promise Chain  Promise Chain  Promise Chain  Promise Chain   Promise Chain   Promise Chain  

// function getData(DataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data : ",DataId);
//             resolve("Success")
//         },2000);
//     })
// }

// console.log("getting Data 1.....");
// getData(1).then((res) => {
//     console.log("getting Data 2.....");
//     return getData(2);
// }).then((res) => {
//     console.log("getting Data 3.....");
//     return getData(3);
// }).then((res) => {
//     console.log("Success.....");
//     console.log(res);
// })

function GetData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", data);
            resolve("success");
        }, 5000);
    })
}
console.log("getting data....")
GetData(4).then((result) =>{
    console.log("getting data....")
    return GetData(5);
}).then((result) => {
    console.log("getting data....")
    return GetData(8);
}).then((result) => {
    console.log("getting data....")
    return GetData(2);
}).then((result) => {
    console.log(result);
})
