// Mostrar total
const total = localStorage.getItem("totalActual");
document.getElementById("totalCompra").innerText = total || 0;

function enviarCorreo(){

const total = localStorage.getItem("totalActual");

const asunto = "Comprobante de Pago - Flion Beatmaker";

const cuerpo = `Hola Flion,

Adjunto comprobante de pago.

Total pagado: $${total} USD

Gracias.`;

window.location.href = `mailto:flionbeatmaker@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}