class Myclass{
    constructor(name){
        this.name = name;
        console.log("WhatsUp!")
    }
    methode1(){
        console.log("what is this brother.")
    }
    methode2(){
        console.log("I don't know brother.")
    }
}

let a = new Myclass("Who");
console.log(a)

class HisClass extends Myclass{
    
}