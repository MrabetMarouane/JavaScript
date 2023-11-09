
var marque = ["apple", "samsung", "dell", "hp", "lg", "acer"];

console.log("Voila les marques disponibles :", marque.join(', '))

let choix = prompt('Merci de choisir votre marque preférée : ')

// console.log(choix);

let isIncluded = marque.includes(choix); // Vérifie si le tableau contient choix
if (isIncluded) {
    console.log("OK")

    let index = marque.indexOf(choix)


    let removed = marque.splice(index, 1);
} // Affiche true sinon false
else {

    console.log("Impossible")
}




console.log(marque.join('-'))
// if 
// console.log('OK !!!')