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

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector("nav");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}
const closeMenu = document.getElementById("close-menu");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navbar.classList.add("active");
    });
}

if(closeMenu){
    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
}

// Cerrar si toca fuera del menú
document.addEventListener("click", (e) => {
    if (
        navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navbar.classList.remove("active");
    }
});