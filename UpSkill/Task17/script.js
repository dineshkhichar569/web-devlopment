const itemName = [
  "Dry Cleaning",
  "Leather & Suede Cleaning",
  "Ironing",
  "Wedding Dress Cleaning",
  "Wash And Fold",
  "Stain Removal",
];
const itemPrice = [
  200,
  999,
  30,
  2400,
  140,
  500,
];

const itemImage = [
  `<img src="assets/dry cleaning.png" alt="">`,
  `<img src="assets/lether.png" alt="">`,
  `<img src="assets/iron.png" alt="">`,
  `<img src="assets/weding.png" alt="">`,
  `<img src="assets/fold.png" alt="">`,
  `<img src="assets/stain.png" alt="">`,
];


let currentIndex = 0;
let totalPrice = 0;

function showNextItem() {
  let Image = document.querySelector(".item-image");
  let Name = document.querySelector(".item-name");
  let Price = document.querySelector(".item-price");

  if (currentIndex < itemName.length) {
    Image.innerHTML = itemImage[currentIndex];
    Name.innerHTML = itemName[currentIndex];
    Price.textContent = itemPrice[currentIndex];
  } else {
    document.querySelector(".add-btn").disabled = true;
    document.querySelector(".skip-btn").disabled = true;
  }

  currentIndex = (currentIndex) % itemName.length;
}

// Initially display the first item
showNextItem(); 

// for add button //
function addItem() {
  if (currentIndex < itemName.length) {
    let html = `<div class="tbody">
        <div class="no">
            <span>●</span>
         </div>
        <div class="service">
            <span>${itemName[currentIndex]}</span>
        </div>
        <div class="price">
            <span>₹${itemPrice[currentIndex]}.00</span>
        </div>
    </div>`;

    document.querySelector(".body").innerHTML =
      document.querySelector(".body").innerHTML + html;



    ////////  to add price as we click add-btn  ////////
    totalPrice = totalPrice + itemPrice[currentIndex];
    document.querySelector(".total-price").innerHTML = `₹${totalPrice}.00`;


    ////////  To remove "No item added" on click on button ////////
    document.querySelector(".initial-display").style.display = 'none';


    //////// tO MAKE BUTTON usable ////////
    let bookBTN1 = document.querySelector(".btn")
    bookBTN1.style.backgroundColor = "";
    bookBTN1.style.cursor = "pointer";

    /////// to stop the alert message when item is added /////////
    
    
    document.querySelector(".btn").addEventListener("click", () => {
      document.querySelector("#name").value;  
      document.querySelector("#email").value;
      document.querySelector("#phone").value;
      
      document.querySelector(".message1").innerHTML = "ⓘ Fill the information given above.";
    
      if(document.querySelector("#name").value &&  
      document.querySelector("#email").value &&
      document.querySelector("#phone").value){
        document.querySelector(".message1").innerHTML = "ⓘ Thank you for contacting. we will get back to you soon."
        document.querySelector(".message1").style.color = "green"
      }
    
    })

    currentIndex++;
    showNextItem();
  }
}

// for skip button //
function skipItem() {
  if (currentIndex < itemName.length) {
    currentIndex++;

    showNextItem();
  }
}

document.querySelector(".add-btn").addEventListener("click", () => {
  addItem();
});
document.querySelector(".skip-btn").addEventListener("click", () => {
  skipItem();
});




////////// initially button style when item is not added ///////////
let bookBTN2 = document.querySelector(".btn");
// bookBTN.disabled = true;
bookBTN2.style.backgroundColor = "#b8b8f8"

////////// message pop up when we click on book now button when item is not added. ///////////
bookBTN2.addEventListener("click", () => {
  document.querySelector(".message1").innerHTML = "ⓘ Add the items to the cart to book the Services."
})