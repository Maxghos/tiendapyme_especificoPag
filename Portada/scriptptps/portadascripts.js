// **Función para alternar el menú lateral**
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar && sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else if (sidebar) {
        sidebar.style.width = "250px";
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------

// **Controles de Carrusel - Sección Original**
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

if (prevButton && nextButton && carousel) {
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < 2) {
            currentIndex++;
            updateCarousel();
        }
    });
}

//--------------------------------------------------------------------------------------------------------------------------------------

// **Función para actualizar el carrusel de la sección original**
function updateCarousel() {
    const offset = currentIndex * -100;
    if (carousel) {
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------

// **Controles de Carrusel - Sección "Lo Más Visto"**
const prevButtonVisto = document.querySelector('.prev-visto');
const nextButtonVisto = document.querySelector('.next-visto');
const carouselVisto = document.querySelector('.carousel-visto');
let currentIndexVisto = 0;

if (prevButtonVisto && nextButtonVisto && carouselVisto) {
    prevButtonVisto.addEventListener('click', () => {
        if (currentIndexVisto > 0) {
            currentIndexVisto--;
            updateCarouselVisto();
        }
    });

    nextButtonVisto.addEventListener('click', () => {
        if (currentIndexVisto < 2) {
            currentIndexVisto++;
            updateCarouselVisto();
        }
    });
}

//--------------------------------------------------------------------------------------------------------------------------------------

function updateCarouselVisto() {
    const offsetVisto = currentIndexVisto * -100;
    if (carouselVisto) {
        carouselVisto.style.transform = `translateX(${offsetVisto}%)`;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------

// JavaScript para manejar el cambio de imágenes al pasar el mouse
document.querySelectorAll('.imagen-con-texto').forEach(container => {
    let images = container.getAttribute('data-images').split(',');
    let imgElement = container.querySelector('img');
    let currentImageIndex = 0;
    let intervalId;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    }

    container.addEventListener('mouseenter', () => {
        intervalId = setInterval(changeImage, 1200);
    });

    container.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        currentImageIndex = 0;
    });
});

//--------------------------------------------------------------------------------------------------------------------------------------

//Roll para bajar a seccion
function scrollToSection() {
    const destino = document.getElementById('productos-destacados');
    if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
    }
}


const productosDestacados = [
    { 
        id: 'A1038', 
        nombre: 'Poleras Mujer', 
        precio: 5900, 
        stock: 15, 
        imagen: '../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg', 
        miniaturas: ['../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg', '../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg'], 
        descripcion: 'Camisetas de diversos estilos, cómodas y versátiles para el uso diario de mujeres.', 
        tallas: ['L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1036', 
        nombre: 'Peto De Pavílo', 
        precio: 2000, 
        stock: 20, 
        imagen: '../imagenesGeneralSuperior/faldas mujer modelar (1).jpg', 
        miniaturas: ['../imagenesGeneralSuperior/faldas mujer modelar (1).jpg', '../imagenesGeneralSuperior/faldas mujer modelar (1).jpg'], 
        descripcion: 'Prenda sin mangas, ideal para actividades informales o deportivas, cómoda y resistente.', 
        tallas: ['M'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1031', 
        nombre: 'Calcetas Normales', 
        precio: 1500, 
        stock: 20, 
        imagen: '../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg', 
        miniaturas: ['../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg', '../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg'], 
        descripcion: 'Son calcetines que cubren el pie hasta la mitad de la pantorrilla.', 
        tallas: ['M'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1017', 
        nombre: 'Calzón Nora', 
        precio: 2000, 
        stock: 20, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar (2).jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar (2).jpg', '../imagenesGeneral/Moda Mujer Modelar (2).jpg'], 
        descripcion: 'Calzón cómodo y sencillo.', 
        tallas: ['M', 'L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1005', 
        nombre: 'Calzon Extra Linda', 
        precio: 2500, 
        stock: 6, 
        imagen: '../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg', 
        miniaturas: ['../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg', '../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg'], 
        descripcion: 'Calzón diseñado para tallas grandes, con detalles que realzan la figura.', 
        tallas: ['XXXL', 'XXXXL', 'XXXXXL', 'XXXXXXL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1018', 
        nombre: 'Calzón Con Encaje', 
        precio: 2000, 
        stock: 5, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar (2).jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar (2).jpg', '../imagenesGeneral/Moda Mujer Modelar (2).jpg'], 
        descripcion: 'Calzón decorado con encaje, ideal para ocasiones especiales.', 
        tallas: ['XXL', 'XXXL', 'XXXXL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1002', 
        nombre: 'Calzon Cuadro', 
        precio: 2000, 
        stock: 10, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar.jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar.jpg', '../imagenesGeneral/Moda Mujer Modelar.jpg'], 
        descripcion: 'Calzón de corte recto y cómodo, ideal para el día a día.', 
        tallas: ['L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1033', 
        nombre: 'Calceta Corta', 
        precio: 2000, 
        stock: 20, 
        imagen: '../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg', 
        miniaturas: ['../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg', '../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg'], 
        descripcion: 'Calcetines que llegan justo debajo del tobillo.', 
        tallas: ['M'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
];


const productosVistos = [
    { 
        id: 'A1014', 
        nombre: 'Calzón Elasticado', 
        precio: 2500, 
        stock: 15, 
        imagen: '../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg', 
        miniaturas: ['../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg', '../imagenesGeneralSuperior/poleras holgada mujer ancha modelar (2).jpg'], 
        descripcion: 'Calzón con banda elástica que se adapta al cuerpo sin apretar.', 
        tallas: ['S', 'M', 'L', 'XL', 'XXL'], // Tallas específicas para este producto
        colores: ['#ffffff', '#000000', '#483cf1'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1027', 
        nombre: 'Calza Extra-Linda', 
        precio: 5900, 
        stock: 20, 
        imagen: '../imagenesGeneralSuperior/faldas mujer modelar (1).jpg', 
        miniaturas: ['../imagenesGeneralSuperior/faldas mujer modelar (1).jpg', '../imagenesGeneralSuperior/faldas mujer modelar (1).jpg'], 
        descripcion: 'Calza con detalles decorativos y estilo femenino.', 
        tallas: ['XL', 'XXL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1001', 
        nombre: 'Colale Con Algodón', 
        precio: 2000, 
        stock: 20, 
        imagen: '../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg', 
        miniaturas: ['../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg', '../imagenesGeneralCalcetas/oferta ropa mujer (1).jpg'], 
        descripcion: 'Prenda íntima de corte brasileño, hecha de algodón para comodidad y frescura.', 
        tallas: ['M', 'L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A10288', 
        nombre: 'Falda Señora', 
        precio: 8000, 
        stock: 20, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar (2).jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar (2).jpg', '../imagenesGeneral/Moda Mujer Modelar (2).jpg'], 
        descripcion: 'Falda elegante y clásica, para ocasiones formales.', 
        tallas: ['L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1011', 
        nombre: 'Pantaleta (Calzón)', 
        precio: 2000, 
        stock: 6, 
        imagen: '../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg', 
        miniaturas: ['../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg', '../imagenesGeneralPrendaInf/Moda Mujer Invierno Abrigada.jpg'], 
        descripcion: 'Calzón de corte completo, cubre más área y ofrece soporte.', 
        tallas: ['L', 'XL'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1030', 
        nombre: 'Pantys Medio-Pantalón', 
        precio: 1500, 
        stock: 5, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar (2).jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar (2).jpg', '../imagenesGeneral/Moda Mujer Modelar (2).jpg'], 
        descripcion: 'Pantys que cubren media pierna, cómodos y prácticos.', 
        tallas: ['M'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1019', 
        nombre: 'Colale Con Encaje', 
        precio: 2000, 
        stock: 10, 
        imagen: '../imagenesGeneral/Moda Mujer Modelar.jpg', 
        miniaturas: ['../imagenesGeneral/Moda Mujer Modelar.jpg', '../imagenesGeneral/Moda Mujer Modelar.jpg'], 
        descripcion: 'Colale brasileño con detalles de encaje, femenino y cómodo.', 
        tallas: ['XXL', 'XXXL', 'XXXXL'], // Tallas específicas para este producto
        colores: ['#ffffff', '#000000', '#483cf1'] // Colores específicos (usando códigos hexadecimales)
    },
    { 
        id: 'A1031', 
        nombre: 'Calcetas Normales', 
        precio: 1500, 
        stock: 20, 
        imagen: '../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg', 
        miniaturas: ['../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg', '../imagenesGeneralCalcetas/oferta ropa mujer (3).jpg'], 
        descripcion: 'Son calcetines que cubren el pie hasta la mitad de la pantorrilla.', 
        tallas: ['M'], // Tallas específicas para este producto
        colores: ['#be8f57', '#ffffff', '#979797'] // Colores específicos (usando códigos hexadecimales)
    },
];



//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------



// **Eventos de clic para productos en "Lo más destacado"**
document.querySelectorAll('.productos-destacados .producto-link').forEach((link, index) => {
    link.addEventListener('click', function() {
        const productoSeleccionado = productosDestacados[index]; // Asegúrate de tener un array `productosDestacados`

        if (productoSeleccionado) {
            localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
        } else {
            console.error(`Producto no encontrado en el índice destacado: ${index}`);
        }
    });
});

// **Eventos de clic para productos en "Lo más visto por los clientes"**
document.querySelectorAll('.mas-visto .producto-link').forEach((link, index) => {
    link.addEventListener('click', function() {
        const productoSeleccionado = productosVistos[index]; // Asegúrate de tener un array `productosMasVisto`

        if (productoSeleccionado) {
            localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
        } else {
            console.error(`Producto no encontrado en el índice más visto: ${index}`);
        }
    });
});

