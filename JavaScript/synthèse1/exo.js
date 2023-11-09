console.log("*************PRONOTE**************")
console.log()

let etudiant = parseInt(prompt("Combien  d'étudiants sont dans la classe ? : "))
let evaluation = parseInt(prompt(" Combien d'évaluations seront saisies pour chaque étudiant ? : "))
let tab_notes = []
let tab_moyennes = []


for (let i = 1; i <= etudiant; i++) {
    console.log("étudiant :", i)

    for (let z = 1; z <= evaluation; z++) {
        note = parseInt(prompt("Entrez la note pour l'évaluation" + z + " de l'étudiant" + i))
        tab_notes.push(note)

    }

console.log(tab_notes)

let sum = tab_notes.reduce(function(acc, curr) {
    return acc + curr; // Additionne les éléments du tableau
    }, 0);

    let moyenne= sum/evaluation

// Affichage de la mention
if (moyenne >= 18) 
        {
        alert("La moyenne de l'éleve est :"+ moyenne+"\nExcellent !! je vous filicite.");
        }
    else if ( 15<=  moyenne <=18 ) {
        alert("La moyenne de l'éleve est :"+ moyenne+"\nTrès bien !");
        } 
    else if ( 12<=  moyenne <=15) {
        alert("La moyenne de l'éleve est :"+ moyenne+"\nbien !");
        } 
    else if  (moyenne <= 12){
        alert("La moyenne de l'éleve est :"+ moyenne+"\nPeux mieux faire ! Try Hard");
        } 
    else {
        alert("Erreur de saisie")
        }   
        
    tab_moyennes.push(moyenne)
    
    tab_notes=[]
    
        
        
}

let moy_gene =tab_moyennes.reduce(function(acc, curr) {
        return acc + curr; // Additionne les éléments du tableau
        }, 0);
         
//alert("La moyenne génerale de la classe :" +moyenne)
console.log(tab_moyennes)