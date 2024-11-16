/*
// Recupera los datos del carrito desde localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Función para renderizar los productos en la página de resumen
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío. Agrega productos para continuar con la compra.</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p><strong>${item.name}</strong></p>
                <p>Talla: ${item.talla}</p>
                <p>Cantidad: ${item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeCartItem(${index})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
        total += parseFloat(item.price.replace('$', '')) * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeCartItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

// Redirige a la siguiente página de datos
document.getElementById('continue-btn').addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert("Tu carrito está vacío. Por favor, agrega productos antes de continuar.");
        return;
    }
    window.location.href = "../Compra2/compra2.html"; // Redirige a la siguiente página de datos
});

// Inicializa el carrito en la página
renderCartItems();*/
// Recupera los datos del carrito desde localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Función para renderizar los productos en la página de resumen
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío. Agrega productos para continuar con la compra.</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p><strong>${item.name}</strong></p>
                <p>Talla: ${item.talla}</p>
                <p>Cantidad: ${item.quantity}</p>
                <p>Precio Unitario: $${item.price}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeCartItem(${index})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeCartItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
}

// Redirige a la siguiente página de datos y envía el carrito al back-end
document.getElementById('continue-btn').addEventListener('click', async () => {
    if (cartItems.length === 0) {
        alert("Tu carrito está vacío. Por favor, agrega productos antes de continuar.");
        return;
    }

    try {
        // Enviar el carrito al back-end
        const response = await fetch("https://tu-backend/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItems) // Enviar el carrito
        });

        if (!response.ok) {
            throw new Error("Error al procesar el carrito.");
        }

        const result = await response.json();

        // Confirmar éxito y redirigir
        alert("El stock ha sido actualizado y tu compra está lista para continuar.");
        window.location.href = "../Compra2/compra2.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un problema al procesar tu carrito.");
    }
});

// Inicializa el carrito en la página
renderCartItems();
