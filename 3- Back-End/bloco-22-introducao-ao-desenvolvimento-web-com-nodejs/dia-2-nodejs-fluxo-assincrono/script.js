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
    
const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);
        
   const func = async () => await threePromises(num1,num2,num3)
                            .then((e) => console.log(e))
                            .catch((e) => console.log(e));
    func() 
