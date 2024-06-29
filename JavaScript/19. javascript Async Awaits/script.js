async function Wo(){
    console.log("wo wooooooo");
}

 function Api(){
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            console.log("Getting Weather Data.....")
            resolve("200");
        }, 2000)
    })
 }

 async function GetData(){
     await Api(2345);
 }


 function GetData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataId);
            resolve("success");
        }, 2000);
    })
 }

 async function Getting(){
    console.log("getting data1......")
    await GetData(1)
    console.log("getting data2......")
    await GetData(2)
    console.log("getting data3......")
    await GetData(3)
    console.log("getting data4......")
    await GetData(4)
    console.log("getting data5......")
    await GetData(5)
 }

//IIFE  IIFE   IIFE   IIFE  IIFE   IIFE  
//IIFE  IIFE   IIFE   IIFE  IIFE   IIFE  
//IIFE  IIFE   IIFE   IIFE  IIFE   IIFE        

 (async function (){
    console.log("getting data1......")
    await GetData(1)
    console.log("getting data2......")
    await GetData(2)
    console.log("getting data3......")
    await GetData(3)
    console.log("getting data4......")
    await GetData(4)
    console.log("getting data5......")
    await GetData(5)
 })();