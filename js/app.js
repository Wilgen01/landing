var hamburguer = document.getElementById('hamburguer');
var menu = document.getElementById('menu');

hamburguer.addEventListener('click', function(e) {
    menu.classList.toggle("launch");
});