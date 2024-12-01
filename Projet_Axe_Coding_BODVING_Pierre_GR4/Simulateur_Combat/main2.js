class hero { //Crée la classe "hero"
    constructor(name, hp, atk, def, accuracy) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.accuracy = accuracy
    } // Paramètre la classe pour avoir un nom, une stat de hp, d'atk, de def et d'accuracy pour les objets à qui ont assignerait cette classe

}

let kimaruko = new hero("Kimaruko", 10, 6, 2, 0.85); //Assigne la classe "hero" à un objet et lui assigne le nom "Kimaruko" ainsi que des valeurs pour chaque statistiques


let hayato = new hero("Hayato", 15, 9, 4, 0.65); //Assigne la classe "hero" à un objet et lui assigne le nom "Hayato" ainsi que des valeurs pour chaque statistiques


let dégâtsSubisHayato = (kimaruko.atk - hayato.def); //Défini une variable "dégâts subis par Hayato" d'être égale à la différence entre l'attaque de Kimaruko et la défense d'Hayato
let hpRestantsHayato = (hayato.hp - dégâtsSubisHayato); // Défini une variable "HP restants d'Hayato" d'être égale à la valeur de HP d'Hayato moins les dégats qu'il a subi

let dégâtsSubisKimaruko = (hayato.atk - kimaruko.def); //Défini une variable "dégâts subis par Kimaruko" d'être égale à la différence entre l'attaque de Hayato et la défense de Kimaruko
let hpRestantsKimaruko = (kimaruko.hp - dégâtsSubisKimaruko); // Défini une variable "HP restants de Kimaruko" d'être égale à la valeur de HP de Kimaruko moins les dégats qu'elle a subie


function fight(kimaruko, hayato){ //Fonction pour lancer un combat entre les deux héros

    while(kimaruko.hp != 0 || hayato.hp != 0){
     if (kimaruko.atk > hayato.def) {
        return "Hayato a subi " + dégâtsSubisHayato +" points de dégâts. Il lui reste " + hpRestantsHayato + " PV !";
    } else {
        hayato.hp = hpRestantsHayato
        return "Kimaruko a subi " + dégâtsSubisKimaruko +" points de dégâts. Il lui reste " + hpRestantsKimaruko + " PV !";
    }}
}

console.log(fight(kimaruko, hayato));