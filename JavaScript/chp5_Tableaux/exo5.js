let tableau = [1,2,3,4,5];

let sommme = tableau.reduce(function(acc, curr) {
    return acc + curr; // Additionne les éléments du tableau
    }, 0);
    console.log(sommme);