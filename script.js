// ================= WOW.js ================
new WOW().init();


// ================= Typed.js =================
new Typed("#title", {
    strings: ["mAS ESTRELLA qUe Mujer MAs Musica que ALma"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 6000,
    startDelay: 500,
    loop: true,
    showCursor: false,
});


// ================= Música de fondo =================
const music = document.getElementById("bg-music");
const startBtn = document.getElementById("start-audio");

function startMusic() {
    music.volume = 0.4;
    music.play().catch(() => {});
    startBtn.remove();
}

startBtn.addEventListener("click", startMusic);


// ================= Mensajes aleatorios =================
const mensajesDimensiones = [
    "Un espagueti que filosofea sobre la vida",
    "Un cactus que escribe cartas de amor",
    "Una sombra que se ríe sola",
    "Un caracol con jetpack",
    "Una nube que hace origami",
    "Un reloj que olvida el tiempo",
    "Un pingüino que toca violín",
    "Un árbol que baila salsa",
    "Un espejo que susurra secretos",
    "Una taza de té que viaja al futuro",
    "Un pez que colecciona sombreros",
    "Un huevo que cuenta historias de piratas",
    "Una lámpara que canta ópera",
    "Un libro que cambia su final cada día",
    "Un semáforo que da consejos de vida",
    "Un globo que aprende idiomas",
    "Una estrella que hace magia con caramelos",
    "Un zapato que dibuja mapas del universo",
    "Un río que habla en riddles",
    "Un gato que escribe novelas de misterio",
    "Una montaña que se esconde cuando llueve",
    "Un espejo que se enamora de tu reflejo",
    "Un sombrero que predice el clima",
    "Una luna que colecciona sueños perdidos",
    "Un caramelo que recuerda tu infancia"
];

const img1 = document.querySelector(".image-1");

img1.addEventListener("click", () => {
    const mensaje = mensajesDimensiones[Math.floor(Math.random() * mensajesDimensiones.length)];
    mostrarToast(mensaje);
});

function mostrarToast(texto) {
    const toast = document.createElement("div");
    toast.textContent = texto;
    toast.className = "toast-message";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("transitionend", () => toast.remove());
    }, 3000);
}


// ================= GALERIA FLORES IMAGE 2 ====
// ================= FLORES ALEATORIAS =================

const flores = [
    "assets/flor1.jpg",
    "assets/flor2.jpg",
    "assets/flor3.jpg",
    "assets/flor4.jpg",
    "assets/flor5.jpg",
    "assets/flor6.jpg",
    "assets/flor7.jpg",
    "assets/flor8.jpg",
    "assets/flor9.jpg",
    "assets/flor10.jpg"
];

const img2 = document.querySelector(".image-2");
const florContainer = document.getElementById("flor-container");
const florRandom = document.getElementById("flor-random");

img2.addEventListener("click", () => {

    // Elegir flor al azar
    const randomIndex = Math.floor(Math.random() * flores.length);
    florRandom.src = flores[randomIndex];

    // Mostrar contenedor
    florContainer.style.display = "flex";

    // Animación suave
    florRandom.style.animation = "none";
    florRandom.offsetHeight; 
    florRandom.style.animation = "aparecer 0.6s ease";

    // Scroll hacia la flor
    florContainer.scrollIntoView({ behavior: "smooth" });
});
// ================= POEMAS ALEATORIOS IMAGE 3 =================

const img3 = document.querySelector(".image-3");

// Cuando se haga click en Imagen 3
img3.addEventListener("click", () => {
    // Abrir nueva página pasando el audio fijo como query string
    const url = `poema.html?audio=${encodeURIComponent("assets/poema_ara.mp3")}`;
    window.open(url, "_blank");
});

img3.addEventListener("click", () => {

    const poemaRandom = poemas[Math.floor(Math.random() * poemas.length)];

    poemaImg.src = poemaRandom.img;
    poemaAudio.src = poemaRandom.audio;

    poemaContainer.style.display = "flex";
    poemaContainer.scrollIntoView({ behavior: "smooth" });

});

