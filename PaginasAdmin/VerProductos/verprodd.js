// Función para mostrar y ocultar el menú lateral
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Variables para gestionar el modo de edición
let editIndex = null; // Para identificar el producto que se está editando
let productos = [ // Ejemplo de productos iniciales
    {
        name: "Producto 1",
        description: "Descripción del Producto 1",
        price: "100",
        stock: "10",
        category: "Electrónica",
        image: "Imagenesssadanjks/22582ddb4d0654e2e33f99fdf7b4de63.jpg"
    },
    {
        name: "Producto 2",
        description: "Descripción del Producto 2",
        price: "150",
        stock: "5",
        category: "Hogar",
        image: "Imagenesssadanjks/Sin título.png"
    },
    {
        name: "Producto 3",
        description: "Descripción del Producto 3",
        price: "200",
        stock: "8",
        category: "Juguetes",
        image: "Imagenesssadanjks/tenor.gif"
    }
];

// Función para filtrar productos por nombre y categoría
function filterProducts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const categoryValue = document.getElementById('category-filter').value;
    const filteredProducts = productos.filter(product => {
        const matchesCategory = categoryValue === '' || product.category === categoryValue;
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        return matchesCategory && matchesSearch;
    });

    displayProducts(filteredProducts); // Muestra solo los productos filtrados
}

// Función para abrir el modal de agregar producto
function addProduct() {
    document.getElementById('addProductModal').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

// Función para abrir el modal de editar producto
function openEditProductModal(index) {
    const product = productos[index];
    editIndex = index;

    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductStock').value = product.stock;
    document.getElementById('editProductCategory').value = product.category;

    document.getElementById('editProductModal').style.display = 'block';
    document.getElementById('editErrorMessage').style.display = 'none';
}

// Función para cerrar los modales
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById('addProductForm').reset();
    document.getElementById('editProductForm').reset();
}

// Función para agregar un nuevo producto
function submitProduct() {
    const productName = document.getElementById('productName').value.trim();
    const productDescription = document.getElementById('productDescription').value.trim();
    const productPrice = document.getElementById('productPrice').value.trim();
    const productStock = document.getElementById('productStock').value.trim();
    const productCategory = document.getElementById('productCategory').value;
    const productImage = document.getElementById('productImage').files[0];
    const errorMessage = document.getElementById('errorMessage');

    if (!productName || !productDescription || !productPrice || !productStock || !productCategory || !productImage) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        stock: productStock,
        category: productCategory,
        image: URL.createObjectURL(productImage)
    };

    productos.push(newProduct);
    displayProducts(); 
    closeModal('addProductModal');
}

// Función para actualizar un producto existente
function updateProduct() {
    const productName = document.getElementById('editProductName').value.trim();
    const productDescription = document.getElementById('editProductDescription').value.trim();
    const productPrice = document.getElementById('editProductPrice').value.trim();
    const productStock = document.getElementById('editProductStock').value.trim();
    const productCategory = document.getElementById('editProductCategory').value;
    const productImage = document.getElementById('editProductImage').files[0];

    if (!productName || !productDescription || !productPrice || !productStock || !productCategory) {
        document.getElementById('editErrorMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('editErrorMessage').style.display = 'none';
    }

    productos[editIndex] = {
        ...productos[editIndex],
        name: productName,
        description: productDescription,
        price: productPrice,
        stock: productStock,
        category: productCategory,
        image: productImage ? URL.createObjectURL(productImage) : productos[editIndex].image
    };

    displayProducts();
    closeModal('editProductModal');
}

// Función para mostrar los productos en la interfaz
function displayProducts(products = productos) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.setAttribute('data-category', product.category);
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProductDetails('${product.name}')">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <p>Stock: ${product.stock} unidades</p>
            <p>Categoría: ${product.category}</p>
            <button onclick="openEditProductModal(${index})">Editar</button>
            <button onclick="deleteProduct(${index})">Eliminar</button>
        `;
        productList.appendChild(productElement);
    });
}

// Función para ver los detalles de un producto específico
function viewProductDetails(productName) {
    const productDetail = document.getElementById('product-detail');
    const productTitle = document.getElementById('product-name');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const productStock = document.getElementById('product-stock');
    const productCategory = document.getElementById('product-category');

    // Verifica que todos los elementos de la sección de detalles existan
    if (!productDetail || !productImage || !productDescription || !productPrice || !productStock || !productCategory) {
        console.error("No se encontró uno de los elementos de detalle del producto en el DOM.");
        return;
    }

    // Busca el producto en el array de productos
    const productData = productos.find(product => product.name === productName);

    // Verifica si el producto existe
    if (productData) {
        productImage.src = productData.image;
        productTitle.textContent = productData.name;
        productDescription.textContent = productData.description;
        productPrice.textContent = "$" + productData.price;
        productStock.textContent = productData.stock + " unidades";
        productCategory.textContent = productData.category;
        productDetail.style.display = 'block';
    } else {
        console.error("Producto no encontrado.");
    }
}

// Eliminar producto
function deleteProduct(index) {
    productos.splice(index, 1);
    displayProducts();
}

// Inicializar la lista de productos al cargar la página
displayProducts();
