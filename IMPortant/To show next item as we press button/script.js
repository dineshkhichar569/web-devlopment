const itemName = [
    "Dry Cleaning",
    "Leather & Suede Cleaning",
    "Ironing",
    "Wedding Dress Cleaning",
    "Wash And Fold",
    "Stain Removal"
]
const itemPrice = [
    "₹200.00",
    "₹999.00",
    "₹30.00",
    "₹2400.00",
    "₹140.00",
    "₹500.00"
]


// Index to track the current item
let currentIndex = 0;

// Function to display the next item
function showNextItem() {
    // Get the item container element
    const Name = document.querySelector(".item-name");
    const Price = document.querySelector(".item-price");

    // Display the current item
    Name.textContent = itemName[currentIndex];
    Price.textContent = itemPrice[currentIndex];

    // Increment the index, and reset if it reaches the end of the array
    currentIndex = (currentIndex + 1) % itemName.length;
}

// Add click event listener to the button
document.querySelector(".add-btn").addEventListener('click', showNextItem);

// Initially display the first item
showNextItem();