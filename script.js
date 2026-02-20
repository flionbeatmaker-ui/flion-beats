const searchInput = document.getElementById("searchInput");
const beatCards = document.querySelectorAll(".beat-card");

// BUSCADOR
if(searchInput){
searchInput.addEventListener("input", () => {
const filter = searchInput.value.toLowerCase();
beatCards.forEach(card => {
card.style.display =
card.dataset.genero.toLowerCase().includes(filter)
? "block"
: "none";
});
});
}

// REPRODUCTOR ÚNICO
const players = document.querySelectorAll(".audio-player");
players.forEach(player => {
player.addEventListener("play", () => {
players.forEach(other => {
if (other !== player) {
other.pause();
other.currentTime = 0;
}
});
});
});

// LOCAL STORAGE
let vendidos = JSON.parse(localStorage.getItem("beatsVendidos")) || [];

vendidos.forEach(id => {
const beat = document.querySelector(`[data-id="${id}"]`);
if (beat) beat.remove();
});

let carrito = [];
const precioBeat = 10;

function agregarAlCarrito(id, nombre) {
carrito.push({ id, nombre });
document.getElementById("cart-count").innerText = carrito.length;
document.getElementById("cart-total").innerText = carrito.length * precioBeat;
}

function pagarCarrito() {

if (carrito.length === 0) {
alert("Carrito vacío");
return;
}

const total = carrito.length * precioBeat;

// Guardamos info temporal
localStorage.setItem("carritoActual", JSON.stringify(carrito));
localStorage.setItem("totalActual", total);

// Redirigir a nueva página
window.location.href = "checkout.html";
}
const total = carrito.length * precioBeat;

const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=santyleonc07@gmail.com&item_name=Flion Beats&amount=${total}&currency_code=USD`;

window.open(url, "_blank");

carrito.forEach(item => {
vendidos.push(item.id);
const beat = document.querySelector(`[data-id="${item.id}"]`);
if (beat) beat.remove();
});

localStorage.setItem("beatsVendidos", JSON.stringify(vendidos));

carrito = [];
document.getElementById("cart-count").innerText = 0;
document.getElementById("cart-total").innerText = 0;


function resetCatalogo() {
localStorage.removeItem("beatsVendidos");
location.reload();
}

function filtrarGenero(genero) {
const beats = document.querySelectorAll(".beat-card");

beats.forEach(beat => {
if (genero === "todos") {
beat.style.display = "block";
} else {
beat.style.display =
beat.dataset.genero === genero ? "block" : "none";
}
});
}

document.addEventListener("contextmenu", function(e){
e.preventDefault();
});