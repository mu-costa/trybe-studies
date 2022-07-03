const fs = require("readline-sync");

const generateNumberAndCheck = () => {
    const num = fs.questionInt("Digite um numero: ");
    const randomNum = Math.floor(Math.random() * 11);;

    if(num == randomNum){
        console.log(`Parabens numero correto ${num} sorteado: ${randomNum}`);
    }
    else{
        console.log(`Parabens numero errado ${num} sorteado: ${randomNum}`);
    }   
} 


const tryAgain = () => {
    generateNumberAndCheck();
    const answer = fs.question("Quer tentar novamente? ").toLowerCase();
    if(answer === "sim" || isNaN(answer)){
        tryAgain()
    }
}

module.exports = tryAgain;