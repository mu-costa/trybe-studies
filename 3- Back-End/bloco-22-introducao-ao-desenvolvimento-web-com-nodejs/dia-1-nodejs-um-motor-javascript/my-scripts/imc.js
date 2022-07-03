const fs = require("readline-sync");

const IMC = () => {
    const height = fs.questionFloat("Digite sua altura: ");
const mass = fs.questionFloat("Digite sua massa: ")
const IMC = (height, mass) =>  mass / (height * 2);
const imc = IMC(height,mass);
console.log(imc);

if(imc){
    console.log(`Abaixo do peso(magreza) ${imc}`);
}
}

const oi = () => console.log("oi");

module.exports = IMC;