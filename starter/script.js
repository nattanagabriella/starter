let level = 0;
let started = false;
let coresBotoes = ["red", "blue", "green", "yellow"];
let coresAleatoriasGeradas = [];
let coresEscolhidas = [];

document.addEventListener('keydown', event => {
    if (event && !started) {
        document.getElementById('level-title').textContent = `Level ${level}`;
        proximaSequencia();
        started = true;
    }
});