// To read about Promise API's
// GoTo :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

function getData1(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 1");
            // resolve("success1")
            reject("Failed1")
        }, 1000);
    })
}

function getData2(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 2");
            // reject("Failed2")
            resolve("success2")
        }, 1000);
    })
}

function getData3(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 3");
            reject("Failed3")
            // resolve("success3")
        }, 1000);
    })
}

function getData4(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 4");
            // reject("Failed4")
            resolve("success4")
        }, 1000);
    })
}

function getData5(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 5");
            reject("Failed5")
            // resolve("success5")
        }, 1000);
    })
}

// Promise.all
let ALL = Promise.all([getData1(), getData2() ,getData3(), getData4(), getData5()])
ALL.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})

// Promise.allSettled
let ALLSETTLED = Promise.allSettled([getData1(), getData2() ,getData3(), getData4(), getData5()])
ALLSETTLED.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})

// Promise.race
let RACE = Promise.race([getData1(), getData2() ,getData3(), getData4(), getData5()])
RACE.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})

// Promise.any
let ANY = Promise.any([getData1(), getData2() ,getData3(), getData4(), getData5()])
ANY.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})

// Promise.resolve
let RESOLVE = Promise.resolve([getData1(), getData2() ,getData3(), getData4(), getData5()])
RESOLVE.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})

// Promise.reject
let REJECT = Promise.reject([getData1(), getData2() ,getData3(), getData4(), getData5()])
REJECT.then((out) => {
    console.log(out)
}).catch((err) => {
    console.log(err);
})