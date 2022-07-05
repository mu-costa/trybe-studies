function threePromises (param1, param2, param3){
    const promise = new Promise((resolve, reject)=>{
        if( typeof(param1) !== "number" || typeof(param2) !== "number"|| typeof(param3) !== "number"){
            reject (new Error("Informe apenas números"))
        }
        if(((param1 + param2) * param3) < 50){
            reject (new Error("Valor muito baixo"))
        }else{
            resolve((param1 + param2) * param3);
        }
        
    })
    return promise;
} 

    threePromises(1,30,10)
        .then(e => console.log(e))
        .catch(err => console.error(err.message));
