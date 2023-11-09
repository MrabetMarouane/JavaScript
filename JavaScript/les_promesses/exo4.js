function diviser(a,b){
    return promesse = new  Promise ((resolve,reject)=>{
        
            if (b != 0) resolve(a/b)
            else if (b == 0) reject ("OP OP OP ! Division par zéro ! ")
            
        
        
    })
}    
        
 diviser(15,3)             
.then((text)=>{console.log(text);})
.catch((text)=>{console.log(text);})