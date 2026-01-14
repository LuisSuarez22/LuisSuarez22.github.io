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
    music.play().catch(() => {}); // evita errores en móvil
    startBtn.remove(); // elimina la capa invisible
}

// Se activa con el PRIMER click real
startBtn.addEventListener("click", startMusic);
// ================= Mensajes aleatorios estilo "toast" =================
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

