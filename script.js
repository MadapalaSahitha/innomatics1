// script.js
// ... (other code remains the same)

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');

    // Shift main content if cart is active
    mainContent.classList.toggle('shifted', cartSidebar.classList.contains('active'));
}

// ... (rest of the code remains the same)

// DOM elements (add the overlay and main content)
const cartOverlay = document.getElementById('cartOverlay'); // Get overlay directly (it's in the HTML now)
const mainContent = document.querySelector('.main-content');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartButton = document.getElementById('closeCart');
const cartToggle = document.querySelector('.cart-toggle');

// Add event listener to the overlay to close the cart
cartOverlay.addEventListener('click', toggleCart);

// Event