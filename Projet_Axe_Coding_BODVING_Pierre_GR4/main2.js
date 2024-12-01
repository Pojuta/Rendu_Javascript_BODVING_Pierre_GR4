var body = document.querySelector("body")
var button = document.getElementById("darkModeButton")

darkModeButton.addEventListener('click', function() {

    body.classList.toggle('persona4-dark-theme') // Permet de toggle le dark mode
})

let form = document.querySelector('form')

form.addEventListener('submit', function(event){

    event.preventDefault(); //Empêche l'envoi du formulaire et donc de faire recharger la page pour pouvoir constater si le formulaire fonctionne correctement
    console.log('Envoi détecté') 

    let email = document.getElementById('email')

    if(email.value == '') {

        console.log("invalide") // Détecte si la case "Email" est rempli ou non et rend la case rouge pour signaler que l'email n'est pas bon

        email.classList.add('invalide')

    } else {

        console.log('valide') // Détecte que l'email est correct et rend la case verte pour le montrer

        email.classList.add('valide')

    }

    let pseudo = document.getElementById('pseudo')

    if(pseudo.value.length < 6) {

        console.log("invalide") // Détecte si le pseudo possède moins de 6 caractères et rend la case rouge pour signaler que le pseudo n'est pas correct

        pseudo.classList.add('invalide')

    } else {

        console.log('valide') // Détecte que le pseudo est bon et rend la case verte pour le signaler

        pseudo.classList.add('valide')

    }

    let password = document.getElementById('password')

    let passCheck = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$"); // Permet d'appliquer la règle qui fait que le mot de passe doit

    if(password.value.length < 8 || passCheck.test(password.value) == false) {

        console.log("invalide") // Détecte si le mot de passe ne valide pas la règle des caractères et s'il possède moins de 8 caractères. Rend la case rouge pour le signaler

        password.classList.add('invalide')

    } else {

        console.log('valide') // Détecte que les deux conditions sont valides et rend la case verte pour le montrer

        password.classList.add('valide')

    }

    let rePassword = document.getElementById('rePassword')

    let rePassCheck = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");

    if(rePassword.value.length < 8 || rePassCheck.test(rePassword.value) == false) {

        console.log("invalide")

        rePassword.classList.add('invalide')

    } else {

        console.log('valide')

        rePassword.classList.add('valide')

    }

    if(password.value == rePassword.value) { // Constate si le "password" et la vérifictaion "rePassword" sont égaux et rend la case "rePassword" verte pour le montrer

        console.log('valide')

        rePassword.classList.add('password-égal')

    } else {

        console.log('invalide') // Constate que les deux mot de passes sont différents et rend la case "rePassword" rouge pour le montrer
    
        rePassword.classList.add('password-inégal')
    }
    
})


