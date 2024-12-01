var body = document.querySelector("body")
var button = document.getElementById("darkModeButton")

darkModeButton.addEventListener('click', function() {

    body.classList.toggle('persona4-dark-theme') //Permet de toggle le dark mode
})


var buttonForPage2 = document.getElementById("buttonForPage2")

buttonForPage2.addEventListener('click', function(){

    window.location.href = 'index2.html'; //Permet de pouvoir passer de la page "index.html" à la page "index2.html" via un bouton au lieu d'un simple lien hypertexte
})


