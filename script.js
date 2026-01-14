// ================= WOW.js =================
new WOW().init();


// ================= Typed.js =================
let options = {
    strings: ["mAS ESTRELLA qUe Mujer MAs Musica que ALma"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 6000,
    startDelay: 500,
    loop: true,
    showCursor: false,
};

let typed = new Typed("#title", options);


// ================= Música de fondo =================
const music = document.getElementById("bg-music");
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        music.volume = 0.4; // volumen bajo
        music.play().catch(() => {}); // evita errores en móvil
        musicStarted = true;

        // Se elimina después de iniciar
        window.removeEventListener("click", startMusic);
        window.removeEventListener("scroll", startMusic);
    }
}

// Primer click o scroll
window.addEventListener("click", startMusic);
window.addEventListener("scroll", startMusic);
