// Promise //

function getSleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sleep = "😴";
            resolve(sleep);
        }, 2000);
    })
}

function getDiet(sleep){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const diet = sleep + "🍌";
            resolve(diet); 
        }, 2000);
    })
}

function getGYM(diet){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const gym = diet + "💪";
            resolve(gym);
        }, 2000);
    })
}

///////////////////////////////////////////////////// then and catch ///////////////////////////////////////////////////////
// getSleep().then((s) => {
//     console.log("You need Sleep.",s);
//     return getDiet(s);
// }).then((d) =>{
//     console.log("You need good sleep and diet.", d);
//     return getGYM(d);
// }).then((g)=>{
//     console.log("You need good sleep and diet and GYM.",g);
// })


//////////////////////////////////////////////////// async await ///////////////////////////////////////////////////////////



async function Plan(){
    const s = await getSleep();
    console.log("You need Sleep.",s);

    const d = await getDiet(s);
    console.log("You need good sleep and diet.", d);
    
    const g = await getGYM(d);
    console.log("You need good sleep and diet and GYM.",g)
}

Plan();