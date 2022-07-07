const fs = require('fs');

const calculaSituacao = (num) => {
    if( isNaN(num)) throw new Error("O argumento passado não é um numero")
    if( num > 0) return "positivo";
    if( num < 0) return "negativo";
    if( num === 0) return "neutro";
}

const writeFile = (file, content) => {
    try {
        fs.writeFileSync(file, content);
        return 'ok';
    } catch (error) {
        return error;
    }
}

console.log(writeFile('mu.txt', 'mu'));
module.exports = {
    calculaSituacao,
    writeFile
};