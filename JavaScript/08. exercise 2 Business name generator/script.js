// Create a business name generator by combining list of adjectives and shop name and anoother word

// Adjectives:
// Crazy
// Amazing
// Fire

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub



//  0  0.33  0.66
rand = Math.random()
let first, second, third ;
 if(rand <0.33){
    first = "crazy"
 }
 else if(rand >=0.33 && rand <= 0.66){
    first = "amazing"
 }
 else{
    first = "fire"
 }


rand = Math.random()
 if(rand < 0.33){
    second = "engine"
}
else if(rand >=0.33 && rand <= 0.66){
    second = "foods"
}
else{
    second = "garments"
 }


rand = Math.random()
 if(rand < 0.33){
    third = "bros"
}
else if(rand >=0.33 && rand < 0.66){
    third = "limited"
}
else{
    third = "hub"
 }

 console.log(`${first} ${second} ${third}`)