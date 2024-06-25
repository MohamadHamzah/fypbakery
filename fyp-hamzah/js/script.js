// Toggle class active for navbar
const navbarNav = document.querySelector(".navbar-nav");

// When the menu button is clicked
document.querySelector("#cake-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active for search

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search");
  const searchForm = document.getElementById("search-form");
  const searchClose = document.getElementById("search-close");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.toggle("active");
  });

  searchClose.addEventListener("click", function () {
    searchForm.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  feather.replace();
});

// Outside sidebar click
const cakeMenu = document.querySelector("#cake-menu");
const searchButton = document.getElementById("search");
const searchForm = document.getElementById("search-form");
const searchClose = document.getElementById("search-close");

document.addEventListener("click", function (e) {
  if (!cakeMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Shopping Cart Modal
  const shoppingCartIcon = document.getElementById("shopping-cart");
  const shoppingCartModal = document.getElementById("shopping-cart-modal");
  const closeShoppingCart = shoppingCartModal.querySelector(".close");
  const checkoutButton = shoppingCartModal.querySelector(".checkout-btn");

  // Payment Page Modal
  const paymentPageModal = document.getElementById("payment-page");
  const cancelPaymentButton = paymentPageModal.querySelector(".cancel-payment");
  const continuePaymentButton =
    paymentPageModal.querySelector(".continue-payment");

  shoppingCartIcon.addEventListener("click", () => {
    shoppingCartModal.style.display = "block";
    updateCartDisplay();
  });

  closeShoppingCart.addEventListener("click", () => {
    shoppingCartModal.style.display = "none";
  });

  checkoutButton.addEventListener("click", () => {
    shoppingCartModal.style.display = "none";
    paymentPageModal.style.display = "block";
    updatePaymentPage();
  });

  cancelPaymentButton.addEventListener("click", () => {
    paymentPageModal.style.display = "none";
  });

  continuePaymentButton.addEventListener("click", () => {
    // Add logic to handle the payment process
    alert("Payment processed!");
    paymentPageModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == shoppingCartModal) {
      shoppingCartModal.style.display = "none";
    }
    if (event.target == paymentPageModal) {
      paymentPageModal.style.display = "none";
    }
  });

  // Handle adding items to the cart
  const cart = [];
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const menuCard = event.target.closest(".menu-card");
      const itemName = menuCard.getAttribute("data-name");
      const itemPrice = parseFloat(menuCard.getAttribute("data-price"));

      const existingItem = cart.find((item) => item.name === itemName);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
      }

      updateCartDisplay();
    });
  });

  function updateCartDisplay() {
    const cartItemsContainer = shoppingCartModal.querySelector(".cart-items");
    const cartTotalContainer = shoppingCartModal.querySelector(".cart-total");
    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name} x ${item.quantity}</span>
        <span>RM${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });

    cartTotalContainer.textContent = `Total: RM${total.toFixed(2)}`;
  }

  function updatePaymentPage() {
    const cartItemsContainer = paymentPageModal.querySelector(".cart-items");
    const cartTotalContainer = paymentPageModal.querySelector(".cart-total");
    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name} x ${item.quantity}</span>
        <span>RM${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });

    cartTotalContainer.textContent = `Total: RM${total.toFixed(2)}`;
  }

  // Feather icons replacement
  feather.replace();

  // Navbar toggling for mobile view
  const menuToggle = document.getElementById("#cake-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  menuToggle.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });
});

continuePaymentButton.addEventListener("click", () => {
  const itemsOrdered = JSON.stringify(cart);
  const numberOfItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPayment = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  document.getElementById("items_ordered").value = itemsOrdered;
  document.getElementById("number_of_items").value = numberOfItems;
  document.getElementById("total_payment").value = totalPayment.toFixed(2);

  document.querySelector(".billing-form").submit();
});
