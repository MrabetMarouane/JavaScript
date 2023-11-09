const promesse = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const aleatoire = ((Math.random(0,1)));
        
        if(aleatoire>=0.5) resolve("promesse résolue")
        else reject ("promesse rejetée")
        console.log(aleatoire);
    },2000
    )
})
console.log(promesse)