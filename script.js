// ================= WOW.js =================
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
    music.play().catch(() => {}); // evita errores en móvil
    startBtn.remove(); // elimina la capa invisible
}

// Se activa con el PRIMER click real
startBtn.addEventListener("click", startMusic);
// ================= Mensajes aleatorios estilo "toast" =================
const mensajesDimensiones = [
    "Eres la viajera de universos infinitos.",
    "En otra dimensión, eres astronauta de sentimientos.",
    "Tu reflejo en otra realidad baila entre estrellas.",
    "En la dimensión alternativa, todo es música y risas.",
    "Tu esencia cruza universos y deja luz.",
];

const img1 = document.querySelector(".image-1");

img1.addEventListener("click", () => {
    const mensaje = mensajesDimensiones[Math.floor(Math.random() * mensajesDimensiones.length)];
    mostrarToast(mensaje);
});

// Función para crear el toast
function mostrarToast(texto) {
    const toast = document.createElement("div");
    toast.textContent = texto;
    toast.className = "toast-message";
    document.body.appendChild(toast);

    // Desaparece después de 3 segundos
    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("transitionend", () => toast.remove());
    }, 3000);
}

