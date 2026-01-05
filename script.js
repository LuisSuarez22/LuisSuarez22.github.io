// Corrección completa del archivo script.js:

// Inicializar WOW.js para animaciones al hacer scroll
new WOW().init();

// Configuración para Typed.js
let options = {
    strings: ["mAS ESTRELLA qUe Mujer MAs Musica que ALma"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 6000,
    startDelay: 500,
    loop: true,
    showCursor: false,
};

// Inicializar Typed.js
let typed = new Typed("#title", options);
