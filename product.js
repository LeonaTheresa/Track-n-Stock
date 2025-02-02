// Sample predefined products with prices
const products = [
    { name: 'Apple', price: 2.5 },
    { name: 'Banana', price: 1.2 },
    { name: 'Milk', price: 1.8 },
    { name: 'Eggs', price: 3.0 },
    { name: 'Bread', price: 2.0 }
];

// Function to display available products with prices
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the list

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        // Create an "Add to Cart" button for each product
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.onclick = () => addToCart(index);  // Add product to cart when clicked

        listItem.appendChild(addButton);
        productList.appendChild(listItem);
    });
}

// Function to add selected product to the cart
function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = products[index];
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if product already in cart
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Initialize the page and load products
window.onload = displayProducts;
