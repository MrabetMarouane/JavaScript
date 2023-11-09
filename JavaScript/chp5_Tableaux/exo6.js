let tableau = [1,2,3,4,5];

function recherche(tableau,valeur)
{
    let verif = tableau.includes(valeur);
    if (verif == true)
        console.log("True")
    else  
        console.log("False")
}
recherche(tableau,2)