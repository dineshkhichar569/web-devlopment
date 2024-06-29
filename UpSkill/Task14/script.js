const caseOne = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const one = 10/2;
            resolve(one); 
        }, 1000);
    })
}
const caseTwo = (one) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const two = 10/0;
            reject(two);
        }, 1000);
    })
}
const caseThree = (two) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const three = 3/5;
            resolve(three);
        }, 1000);
    })
}
const caseFour = (three) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const four = 5/2;
            resolve(four);
        }, 1000);
    })
}
const caseFive = (four) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const five = 0/0;
            reject(five);
        }, 1000);
    })
}

caseOne().then((on)=>{
    console.log("Result is : ",on);
    return caseTwo(on);
}).catch((tw)=>{
    console.log("Error : Division by zero is not allowed.",tw);
    return caseThree(tw);
}).then((th)=>{
    console.log("Result is : ",th);
    return caseFour(th);
}).then((fo)=>{
    console.log("Result is : ",fo);
    return caseFive(fo);
}).catch((fi)=>{
    console.log("Error : zero divide by 0 is not allowed.",fi);
})