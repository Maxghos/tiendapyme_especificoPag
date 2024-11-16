function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

// Función para abrir el formulario de agregar usuario
function openAddUserForm() {
    document.getElementById('addUserModal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para agregar usuario
function addUser() {
    alert("Función para agregar un nuevo usuario - Guardar en la base de datos.");
    closeModal('addUserModal');
}

// Función para editar usuario
function editUser(userName) {
    alert("Función para editar el usuario: " + userName + " - Guardar los cambios en la base de datos.");
}

// Función para confirmar eliminación de usuario
function confirmDeleteUser(userName) {
    alert("Función para eliminar el usuario: " + userName + " - Eliminar de la base de datos.");
}
