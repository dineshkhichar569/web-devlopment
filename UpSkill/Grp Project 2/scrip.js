let add = `<img src="assets/add.svg" alt="">`;
let remove = `<img src="assets/remove.svg" alt="">`;

function toggleBTN(button) {
  const btn = document.querySelector(`.${button}`);

  if (btn.innerHTML === `Add Item ➕`) {
    btn.style.color = "red";
    btn.innerHTML = `Remove ➖`;
  } else {
    btn.innerHTML = `Add Item ➕`;
    btn.style.color = "black";
  }
}

function addedItem(serviceName, servicePrice) {
  let html = `
      <div class="tbody">
          <div>
              <span>•</span>
              <span>${serviceName}</span>
          </div>
          <span>${servicePrice}</span>
       </div>
      `;

  document.querySelector(".body").innerHTML =
    document.querySelector(".body").innerHTML + html;
}

/////////////////  to add and remove item in table  ////////////////////
function Add_Remove(addItem, addPrice, btnClass) {
  let allbtn = document.querySelector(`.${btnClass}`);
  if (allbtn.innerHTML === `Remove ➖`) {
    addedItem(`${addItem}`, `${addPrice}`);
  } else {
    document.querySelector(".tbody").remove();
  }
}

document.querySelector(".btn1").addEventListener("click", () => {
  // to change the name form "Add Item" to "Remove" when click;
  toggleBTN("btn1");

//   to add and remove item in table
    // let btn1 = document.querySelector(".btn1")
    // if(btn1.innerHTML === `Remove ➖`){
    //   addedItem("Dry Cleaning", "₹200.00")
      
    // }
    // else{
    //   document.querySelector(".tbody").remove();
    // }

  Add_Remove("Dry Cleaning", "₹200.00","btn1");
});

document.querySelector(".btn2").addEventListener("click", () => {
  toggleBTN("btn2");
  Add_Remove("Wash & Fold", "₹100.00", "btn2");
});

document.querySelector(".btn3").addEventListener("click", () => {
  toggleBTN("btn3");
  Add_Remove("Ironing", "₹30.00","btn3");
});

document.querySelector(".btn4").addEventListener("click", () => {
  toggleBTN("btn4");
  Add_Remove("Stain Removal", "₹500.00","btn4");
});

document.querySelector(".btn5").addEventListener("click", () => {
  toggleBTN("btn5");
  Add_Remove("Leather & Suede Cleaning", "₹999.00","btn5");
});

document.querySelector(".btn6").addEventListener("click", () => {
  toggleBTN("btn6");
  Add_Remove("Wedding Dress Cleaning", "₹2800.00","btn6");
});




let message2 = document.querySelector(".message2")
const bookBTN = document.querySelector(".book-btn")

///// to make visible like it is not usable /////
bookBTN.style.backgroundColor = "#fbafea"
bookBTN.style.cursur = "not-allowed"


////// to give a message when button will clicked //////
bookBTN.addEventListener("click", () => {
  message2.innerHTML = "ⓘ Add the items to the cart to book."
  message2.style.color = "red"
})











//////////////  button click will smoothly scroll the page down  ////////////////////
document.querySelector(".book-a-btn").addEventListener('click', function() {
  document.querySelector(".booking-section").scrollIntoView({ behavior:"smooth" });
});
