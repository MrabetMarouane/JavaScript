console.log('Bienvenue dans votre magasin préferé LES RATS')

let choix =""
MaListe = []

while (choix != "q"){

choix = prompt('Choisissez une action (entrez le numéro correspondant) :\n1. Ajouter un élément à la liste de courses\n2. Retirer un élément de la liste de courses\n3. Afficher les éléments de la liste de courses\n4. Vider  la liste de courses\n5. Quitter le programme (ou appuyez sur q)')


if (choix == "1" ){
        let element = prompt('1. Ajouter un élément à la liste de courses')
        MaListe.push(element)
        console.log(MaListe)

}

else if (choix == "5" ){
    choix = "q"

}
if (choix == "2")
{
    alert("Vous avez choisi de rétirer un article de la liste de courses.")
    prompt("Entrez le nom de l'élément à ajouter(ou appuyez sur q pour arrêter) :")
    MaListe.splice(length(element))

}

    
//     case 2 :
//         console.log('2. Retirer un élément de la liste de courses')
//         break;
    
//     case 3 :
//         console.log('3. Afficher les éléments de la liste de courses')
//         break;
        
//     case 4 :
//         console.log('4. Vider  la liste de courses')
//         break;    
    
//         case 5 :
//             console.log('5. Quitter le programme (ou appuyez sur q')
//             break;
            
//     default :
//             console.log('Choix invalide. Veuillez réessayer')

// }

}

alert("Good bye")



// switch(choix)
// {
//     case 1 :
//         console.log('1. Ajouter un élément à la liste de courses')
//         break;
    
//     case 2 :
//         console.log('2. Retirer un élément de la liste de courses')
//         break;
    
//     case 3 :
//         console.log('3. Afficher les éléments de la liste de courses')
//         break;
        
//     case 4 :
//         console.log('4. Vider  la liste de courses')
//         break;    
    
//         case 5 :
//             console.log('5. Quitter le programme (ou appuyez sur q')
//             break;
            
//     default :
//             console.log('Choix invalide. Veuillez réessayer')

// }

