function appelAPI() {
    return promesse = new Promise((resolve, reject) => {
        setTimeout(() => {
        const aleatoire = ((Math.random()));
        if (aleatoire > 0.5) resolve({
            nom : 'Alice',
            age:25
            
        })
    else reject("Erreur lors de l'appel API")
        console.log(aleatoire);
    }, 3000
    )
    })
};

appelAPI()
    .then((text) => { console.log(text); })
    .catch((text) => { console.log(text); })