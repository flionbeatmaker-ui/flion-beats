const total = localStorage.getItem("totalActual");
const carrito = JSON.parse(localStorage.getItem("carritoActual")) || [];

document.getElementById("totalCompra").innerText = total || 0;

function enviarCorreo(){

let listaBeats = "";

carrito.forEach(beat => {
    listaBeats += `- ${beat.nombre} (${beat.genero})\n`;
});

const asunto = "Comprobante de Pago - Flion Beatmaker";

const cuerpo = `Hola Flion,

Adjunto comprobante de pago.

Beats comprados:
${listaBeats}

Total pagado: $${total} USD

Quedo atento al envío del ZIP con:
- Stems
- MP3
- WAV

Gracias.`;

window.location.href = `mailto:flionbeatmaker@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
