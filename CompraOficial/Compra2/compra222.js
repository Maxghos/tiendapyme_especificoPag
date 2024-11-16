// Función para validar los campos del formulario
function validateForm() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !apellido || !email) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return false;
    }
    return true;
}

// Redirige a la siguiente página si los datos son válidos
document.getElementById('next-btn').addEventListener('click', () => {
    if (validateForm()) {
        window.location.href = "../compra3/compra3.html"; // Cambia a la siguiente página
    }
});
