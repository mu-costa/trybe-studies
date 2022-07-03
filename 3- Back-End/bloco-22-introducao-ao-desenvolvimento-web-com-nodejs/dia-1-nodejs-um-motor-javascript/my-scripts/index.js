const fs = require("readline-sync");
const IMC = require('./imc');
const Sorteio = require('./sorteio');
const Velocidade = require('./velocidade');
const choosed = fs.questionInt(`
Escolha um script para ser executado: 
1 - IMC
2 - Sorteio
3 - Velocidade
`);

switch (choosed) {
    case 1:
    IMC();
        break;
    case 2:
    Sorteio();
    break;
    case 3: 
    Velocidade();
    default:
        break;
}