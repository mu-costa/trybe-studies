const calculaSituacao = (num) => {
    if( isNaN(num)) throw new Error("O argumento passado não é um numero")
    if( num > 0) return "positivo";
    if( num < 0) return "negativo";
    if( num === 0) return "neutro";
}

module.exports = calculaSituacao;