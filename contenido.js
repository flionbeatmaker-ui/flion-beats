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

