// Corrección completa del archivo script.js:

// Inicializar WOW.js para animaciones al hacer scroll
new WOW().init();

// Configuración para Typed.js
let options = {
    strings: ["A Winter's Morning"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: false,
};

// Inicializar Typed.js
let typed = new Typed("#title", options);
