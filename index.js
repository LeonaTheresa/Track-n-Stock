// Get DOM elements
const itemNameInput = document.getElementById('itemName');
const expiryDateInput = document.getElementById('expiryDate');
const addItemButton = document.getElementById('addItem');
const groceryList = document.getElementById('groceryList');
// const recommendations=document.getElementById('recommendations');

// Array to hold grocery items
let groceries = [];

// Function to add grocery item to the list
function addGroceryItem() {
    const itemName = itemNameInput.value.trim();
    const expiryDate = expiryDateInput.value;

    if (!itemName || !expiryDate) {
        alert("Please enter both item name and expiry date.");
        return;
    }

    // Create a grocery item object
    const groceryItem = {
        name: itemName,
        expiryDate: new Date(expiryDate),
    };

    // Add grocery item to the groceries array
    groceries.push(groceryItem);

    // Clear the input fields
    itemNameInput.value = '';
    expiryDateInput.value = '';

    // Display the updated grocery list
    displayGroceries();
    displayRecommendations();
}

// Function to display grocery items
function displayGroceries() {
    groceryList.innerHTML = ''; // Clear the list before displaying updated items

    const today = new Date();

    groceries.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}  -  Expires on: ${item.expiryDate.toLocaleDateString()}`;

        // Add expiry warning if item is expired or expiring soon
        const warning = document.createElement('span');
        if (item.expiryDate <= today) {
            warning.textContent = " (Expired)";
            warning.classList.add('expired-warning');
        } else 
        // if ((item.expiryDate - new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000) <= 5 * 24 * 60 * 60 * 1000))
             {
            const timeDifference =item. expiryDate - new Date(today);
            // Convert milliseconds to days
            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            warning.textContent = `Expire within ${daysRemaining} days`;
            if(daysRemaining<=5){
            warning.classList.add('expiringsoon-red-warning');
            }
            else if(daysRemaining>5 && daysRemaining<=15){
                warning.classList.add('expiringsoon-orange-warning');
            }
            else{
                warning.classList.add('expiringsoon-green-warning');
            }
        }
        // else{
        //     warning.textContent = " (Good to Use)";
        //     warning.classList.add('good-warning');

        // }
        if (item.expiryDate - today < 3 * 24 * 60 * 60 * 1000) {
            alert(item.name + " is expiring soon!");
        }

        listItem.appendChild(warning);
        groceryList.appendChild(listItem);
    });
}



// Function to display recommended items based on past purchases (expiring soon)
function displayRecommendations() {
    recommendations.innerHTML = '';  // Clear the recommendations section

    const today = new Date();

    // Find items that are expiring soon (within the next 2 days)
    const expiringSoon = groceries.filter(item => item.expiryDate <= new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000));

    // If there are expiring items, recommend them
    if (expiringSoon.length > 0) {
        const recommendedItems = expiringSoon.map(item => item.name);
        const recommendationText = `We recommend checking out the following items expiring soon: \n  ${recommendedItems.join(', ')}`;
        const recommendationElement = document.createElement('p');
        recommendationElement.textContent = recommendationText;
        recommendations.appendChild(recommendationElement);
    } else {
        // If no items are expiring soon
        const noRecommendations = document.createElement('p');
        noRecommendations.textContent = "No items are expiring soon. You're good to go!";
        recommendations.appendChild(noRecommendations);
    }
}

// Add event listener to the button
addItemButton.addEventListener('click', addGroceryItem);

// Allow pressing "Enter" to add the grocery item
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addGroceryItem();
    }
});





function storeAndRedirect() {
    const inputText = document.getElementById("companyName").value;

    const inputText1 = document.getElementById("userName").value;
    
    // Store the value in localStorage
    localStorage.setItem("inputText", inputText);
    localStorage.setItem("inputText1",inputText1);
    
    // Redirect to the second page
    window.location.href = "index.html"; // Ensure 'secondPage.html' is the correct filename
    
    
  }

  function displayStoredInput() {
    const inputText = localStorage.getItem("inputText");
    const inputText1 = localStorage.getItem("inputText1");
  
    // Display the value in the output element on the second page
    if (inputText) {
      document.getElementById("comp").textContent = inputText;
    } else {
      document.getElementById("comp").textContent = "No input found!";
    }

    if (inputText1) {
        document.getElementById("usr").textContent = inputText1;
      } else {
        document.getElementById("usr").textContent = "No input found!";
      }
  }







//   function loadGroceriesFromStorage() {
//     const storedGroceries = localStorage.getItem('groceries');
//     if (storedGroceries) {
//         return JSON.parse(storedGroceries);
//     }
//     return [];
// }
// // Function to store groceries in localStorage
// function saveGroceriesToStorage(groceries) {
//     localStorage.setItem('groceries', JSON.stringify(groceries));
// }
// // Function to display recommended items based on expiry date
// function displayRecommendations() {
//     recommendations.innerHTML = '';  // Clear the recommendations section

//     const today = new Date();

//     // Find items that are expiring soon (within the next 2 days)
//     const expiringSoon = groceries.filter(item => item.expiryDate <= new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000));

//     // If there are expiring items, recommend them
//     if (expiringSoon.length > 0) {
//         const recommendedItems = expiringSoon.map(item => item.name);
//         const recommendationText = `We recommend checking out the following items expiring soon: \n  ${recommendedItems.join(', ')}`;
//         const recommendationElement = document.createElement('p');
//         recommendationElement.textContent = recommendationText;
//         recommendations.appendChild(recommendationElement);
//     } else {
//         // If no items are expiring soon
//         const noRecommendations = document.createElement('p');
//         noRecommendations.textContent = "No items are expiring soon. You're good to go!";
//         recommendations.appendChild(noRecommendations);
//     }
// }
// // Array to hold grocery items (loaded from localStorage)
// // let groceries = loadGroceriesFromStorage();
// function addGroceryItem() {
//     const itemName = itemNameInput.value.trim();
//     const expiryDate = expiryDateInput.value;

//     if (!itemName || !expiryDate) {
//         alert("Please enter both item name and expiry date.");
//         return;
//     }

//     // Create a grocery item object
//     const groceryItem = {
//         name: itemName,
//         expiryDate: new Date(expiryDate),
//     };

//     // Add grocery item to the groceries array
//     groceries.push(groceryItem);

//     // Save the updated groceries to localStorage
//     saveGroceriesToStorage(groceries);

//     // Clear the input fields
//     itemNameInput.value = '';
//     expiryDateInput.value = '';

//     // Display the updated grocery list
//     displayGroceries();
//     displayRecommendations();
// }
// // Load groceries from localStorage and display when the page loads
// window.onload = function() {
//     displayGroceries();
//     displayRecommendations();
// };
