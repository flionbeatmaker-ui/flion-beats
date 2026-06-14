// ================= BUSCADOR =================
const searchInput = document.getElementById("searchInput");
const beatCards = document.querySelectorAll(".beat-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    beatCards.forEach(card => {
      const nombre = card.querySelector("h3").textContent.toLowerCase();

      card.style.display = nombre.includes(filter)
        ? "block"
        : "none";
    });
  });
}
// ================= REPRODUCTOR ÚNICO =================
const players = document.querySelectorAll("audio");

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

// ================= LOCAL STORAGE (BEATS VENDIDOS) =================
let vendidos = JSON.parse(localStorage.getItem("beatsVendidos")) || [];

vendidos.forEach(id => {
  const beat = document.querySelector(`[data-id="${id}"]`);
  if (beat) beat.remove();
});

// ================= CARRITO =================
let carrito = [];
const precioBeat = 10;

function agregarAlCarrito(id, nombre) {

  const beatCard = document.querySelector(`[data-id="${id}"]`);
  const genero = beatCard.getAttribute("data-genero");

  carrito.push({ id, nombre, genero });

  document.getElementById("cart-count").innerText = carrito.length;
  document.getElementById("cart-total").innerText =
    carrito.length * precioBeat;
}

function pagarCarrito() {

  if (carrito.length === 0) {
    alert("Carrito vacío");
    return;
  }

  const total = carrito.length * precioBeat;

  // Guardar datos para checkout
  localStorage.setItem("carritoActual", JSON.stringify(carrito));
  localStorage.setItem("totalActual", total);

  window.location.href = "checkout.html";
}

// ================= RESET CATÁLOGO =================
function resetCatalogo() {
  localStorage.removeItem("beatsVendidos");
  location.reload();
}

// ================= FILTRAR POR GÉNERO =================
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

// ================= BLOQUEAR CLICK DERECHO =================
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// ================= ORDENAR BEATS ALEATORIAMENTE =================
function mezclarBeats() {
  const container = document.querySelector(".beats-grid");
  const beats = Array.from(container.children);

  // Algoritmo Fisher-Yates
  for (let i = beats.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [beats[i], beats[j]] = [beats[j], beats[i]];
  }

  // Vaciar contenedor
  container.innerHTML = "";

  // Volver a insertar mezclados
  beats.forEach(beat => container.appendChild(beat));
}

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", mezclarBeats);

