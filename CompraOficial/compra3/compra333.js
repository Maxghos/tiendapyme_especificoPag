// Obtener elementos del DOM
const nextBtn = document.getElementById('next-btn');
const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
const transferDetails = document.getElementById('transfer-details');

// Manejar la selección del método de pago
paymentOptions.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "transfer" && option.checked) {
            // Mostrar detalles de transferencia bancaria
            transferDetails.classList.remove('hidden');
        } else {
            // Ocultar detalles de transferencia bancaria
            transferDetails.classList.add('hidden');
        }
    });
});

// Manejar el botón "Siguiente"
nextBtn.addEventListener('click', async () => {
    // Detectar el método de pago seleccionado
    let selectedMethod = "";
    paymentOptions.forEach(option => {
        if (option.checked) {
            selectedMethod = option.value;
        }
    });

    if (!selectedMethod) {
        alert("Por favor, selecciona un método de pago.");
        return;
    }

    try {
        // Enviar al back-end (ajustar la URL de tu API)
        const response = await fetch("https://tu-backend/api/payment-method", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                paymentMethod: selectedMethod
            })
        });

        if (!response.ok) {
            throw new Error("Error al enviar el método de pago.");
        }

        // Redirigir según el método seleccionado
        if (selectedMethod === "debit") {
            window.location.href = "../compra4/compra4.html"; // Página de confirmación
        } else if (selectedMethod === "transfer") {
            alert("Recuerda realizar la transferencia y guarda los datos.");
            window.location.href = "../compra4/compra4.html"; // Página de confirmación
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un problema al procesar tu método de pago.");
    }
});
