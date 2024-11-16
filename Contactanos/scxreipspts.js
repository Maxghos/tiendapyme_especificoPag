// **Función para alternar el menú lateral**
// Muestra u oculta el menú lateral al ajustar su ancho.
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------
// **FUNCIÓN PARA VENTANA EMERGENTE DE SESIÓN**

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM necesarios
    const modal = document.getElementById('user-modal'); // Ventana modal
    const openModalBtn = document.getElementById('open-modal-btn'); // Botón para abrir la ventana modal
    const closeModalBtn = document.getElementById('close-modal-btn'); // Botón para cerrar la ventana modal
    const authBtn = document.getElementById('auth-btn'); // Botón de inicio/cierre de sesión
    const accountConfigBtn = document.getElementById('account-config-btn'); // Botón para configuración de cuenta
    
    let isAuthenticated = false; // Estado de autenticación del usuario

    // Función para actualizar el estado del botón de autenticación
    function updateAuthButton() {
        if (authBtn) { // Verifica que el botón exista
            if (isAuthenticated) {
                // Si el usuario está autenticado
                authBtn.textContent = 'Cerrar Sesión';
                authBtn.onclick = () => {
                    isAuthenticated = false;
                    updateAuthButton();
                    alert('Sesión cerrada'); // Acciones adicionales para cierre de sesión
                };

                // Habilitar botón de configuración de cuenta
                accountConfigBtn.disabled = false;
                accountConfigBtn.onclick = () => {
                    window.location.href = 'config_cuenta.html'; // Redirección a configuración
                };

            } else {
                // Si el usuario NO está autenticado
                authBtn.textContent = 'Iniciar Sesión';
                authBtn.onclick = () => {
                    window.location.href = '../Cuenta InicioSesion/IniciarSes.html'; // Redirección a página de inicio de sesión
                    isAuthenticated = true;
                    updateAuthButton();
                };

                // Deshabilitar botón de configuración de cuenta
                accountConfigBtn.disabled = true;
                accountConfigBtn.onclick = null; // Remueve la acción del botón
            }
        } else {
            console.error("El botón 'auth-btn' no existe.");
        }
    }

    // Función para abrir la ventana modal
    openModalBtn.onclick = function() {
        modal.style.display = 'flex';
        updateAuthButton();
    };

    // Función para cerrar la ventana modal
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Cierra el modal cuando se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Inicializa el estado del botón de autenticación
    updateAuthButton();
});

// **FINAL FUNCIÓN PARA VENTANA EMERGENTE DE SESIÓN**
//--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------

// Función para alternar el menú lateral del carrito
function toggleCartMenu() {
    const cartSidebar = document.getElementById("cart-sidebar");
    if (cartSidebar) {
        cartSidebar.style.width = cartSidebar.style.width === "300px" ? "0" : "300px";
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------

// Inicializa el carrito desde `localStorage` o crea uno vacío si no existe
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let selectedTalla = ''; // Variable global para la talla seleccionada

// Función para actualizar el localStorage cada vez que el carrito cambie
function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Función para capturar la talla seleccionada
function selectTalla(talla) {
    selectedTalla = talla;
    const tallaButtons = document.querySelectorAll('.talla');
    tallaButtons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
}

// Función para añadir un producto al carrito
function addToCart() {
    const productName = document.querySelector('.product-details h1').textContent;
    const productPrice = document.querySelector('.price').textContent;
    const productImage = document.getElementById('imagen-principal').src;
    const productQuantity = parseInt(document.getElementById('cantidad').value, 10);

    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: productQuantity,
        talla: selectedTalla || 'Sin talla',
    };

    cartItems.push(product);

    // Guarda el carrito actualizado en localStorage
    saveCart();

    // Actualiza la interfaz del carrito
    renderCartItems();
    updateCartQuantity(cartItems.length);
}

// Función para renderizar los productos en el menú lateral del carrito
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpia el contenedor antes de actualizar

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" style="width:50px; height:50px;">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <p>Talla: ${item.talla}</p>
                <p>Cantidad: ${item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeCartItem(${index})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    updateCartTotal();
}

// Función para actualizar la cantidad total de productos en el icono del carrito
function updateCartQuantity(quantity) {
    const cartButton = document.querySelector(".btn-cart");
    if (cartButton) {
        cartButton.setAttribute("data-quantity", quantity);
        cartButton.querySelector(".quantity").textContent = quantity;
    }
}

// Función para actualizar el total del carrito
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Función para eliminar un producto del carrito
function removeCartItem(index) {
    cartItems.splice(index, 1); // Elimina el producto del arreglo
    saveCart(); // Guarda el carrito actualizado en localStorage
    renderCartItems(); // Vuelve a renderizar los productos
    updateCartQuantity(cartItems.length); // Actualiza el número de productos en el icono del carrito
}

// Función para restaurar el carrito al cargar cada página
document.addEventListener('DOMContentLoaded', function() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        renderCartItems();
        updateCartQuantity(cartItems.length);
    }
});

// Función para ir a la página de pago y almacenar los datos del carrito en localStorage
function goToCheckout() {
    saveCart(); // Asegura que los datos del carrito están actualizados antes de ir a la página de pago
    window.location.href = "../CompraOficial/Compra1/compra1.html"; // <<-- Página de pago simulada
}

// Escucha para el botón "Agregar Al Carrito"
const addToCartButton = document.querySelector('.add-to-cart');
if (addToCartButton) {
    addToCartButton.addEventListener('click', addToCart);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//IMPORTANTE ESTO ES PARA CONSERVAR LO DEL CARRO EN TODAS LAS PAGS
// Recupera el producto seleccionado desde localStorage
const productoSeleccionadoJSON = localStorage.getItem('productoSeleccionado');
const productoSeleccionado = productoSeleccionadoJSON ? JSON.parse(productoSeleccionadoJSON) : null;

if (productoSeleccionado) {
    const productNameElement = document.querySelector('.product-details h1');
    const priceElement = document.querySelector('.price');
    const mainImageElement = document.getElementById('imagen-principal');
    const stockElement = document.getElementById('product-stock');
    const codeElement = document.getElementById('product-code');
    const descriptionElement = document.querySelector('.description p');
    const miniaturasContainer = document.querySelector('.product-thumbnails');

    // Asigna valores solo si los elementos existen
    if (productNameElement) productNameElement.textContent = productoSeleccionado.nombre;
    if (priceElement) priceElement.textContent = `$${productoSeleccionado.precio}`;
    if (mainImageElement) mainImageElement.src = productoSeleccionado.imagen;
    if (stockElement) stockElement.textContent = productoSeleccionado.stock;
    if (codeElement) codeElement.textContent = productoSeleccionado.id;
    if (descriptionElement) descriptionElement.textContent = productoSeleccionado.descripcion || "Descripción no disponible";

    // Configuración del carrusel de imágenes
    if (miniaturasContainer) {
        miniaturasContainer.innerHTML = ''; // Limpia miniaturas previas
        const images = [productoSeleccionado.imagen, ...productoSeleccionado.miniaturas];
        images.forEach((miniatura, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = miniatura;
            imgElement.alt = `Miniatura de ${productoSeleccionado.nombre}`;
            imgElement.addEventListener('click', () => {
                if (mainImageElement) mainImageElement.src = miniatura;
            });
            miniaturasContainer.appendChild(imgElement);
        });
    }
} else {
    console.warn("No se ha seleccionado ningún producto para mostrar en la página de compra.");
}

// Función adicional para restaurar el carrito
document.addEventListener('DOMContentLoaded', function() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart) || []; // Restaura el carrito guardado o inicia con un array vacío
        if (typeof renderCartItems === 'function') renderCartItems(); // Asegura que renderCartItems existe
        if (typeof updateCartQuantity === 'function') updateCartQuantity(cartItems.length); // Asegura que updateCartQuantity existe
    }
});

// Función para actualizar la cantidad total de productos en el icono del carrito
function updateCartQuantity(quantity) {
    const cartButton = document.querySelector(".btn-cart");
    if (cartButton) {
        cartButton.setAttribute("data-quantity", quantity);
        cartButton.querySelector(".quantity").textContent = quantity;
    }
}
