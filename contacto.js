function enviarWhatsApp(){

const tipo = document.getElementById("tipo").value;
const artista = document.getElementById("artista").value;
const email = document.getElementById("email").value;
const genero = document.getElementById("genero").value;
const mensaje = document.getElementById("mensaje").value;

const texto = `Hola Flion, quiero producir un ${tipo}.
Artista: ${artista}
Email: ${email}
Género: ${genero}
Idea: ${mensaje}`;

const numero = "573165276335"; // CAMBIA ESTO

const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

window.open(url, "_blank");
}

function enviarCorreo(){

const tipo = document.getElementById("tipo").value;
const artista = document.getElementById("artista").value;
const email = document.getElementById("email").value;
const genero = document.getElementById("genero").value;
const mensaje = document.getElementById("mensaje").value;

const asunto = `Producción ${tipo} - ${artista}`;

const cuerpo = `Hola Flion,

Quiero producir un ${tipo}.

Artista: ${artista}
Email: ${email}
Género: ${genero}

Idea:
${mensaje}
`;

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