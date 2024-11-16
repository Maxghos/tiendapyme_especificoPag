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

