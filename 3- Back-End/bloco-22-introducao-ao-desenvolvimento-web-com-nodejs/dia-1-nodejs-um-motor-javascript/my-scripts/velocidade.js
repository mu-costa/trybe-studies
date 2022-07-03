const fs = require("readline-sync");

const measurementVel = () => {

const distancia = fs.questionInt("Digite a velocidade: ");
const tempo = fs.questionInt("Digite o tempo: ");

const vel = distancia / tempo;

console.log(`A velocidade é ${vel} m/s`);
}


module.exports = measurementVel;