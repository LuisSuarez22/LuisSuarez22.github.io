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
