const videos = [
    {
        type: "youtube",
        url: "https://www.youtube.com/embed/TU_ID_1"
    },
    {
        type: "youtube",
        url: "https://www.youtube.com/embed/TU_ID_2"
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/embed/TU_VIDEO_ID"
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/embed/TU_VIDEO_ID_2"
    }
];

// Función para mezclar aleatoriamente
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const container = document.getElementById("videos-container");

shuffle(videos).forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");

    const iframe = document.createElement("iframe");
    iframe.src = video.url;
    iframe.allowFullscreen = true;

    card.appendChild(iframe);
    container.appendChild(card);
});

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
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

// Cerrar menú al tocar fuera
document.addEventListener("click", (e) => {
    if (
        navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navbar.classList.remove("active");
    }
});