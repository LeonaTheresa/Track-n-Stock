// Function to update the cart view (products in cart)
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear the list

    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;

        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

// Initialize the cart page and load cart items
window.onload = updateCart;
