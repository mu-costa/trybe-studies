//Desenvolva uma HOF que retorna o resultado de um sorteio.
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e 
//uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const resultRaffle = chooseNumber => randomNumber() == chooseNumber ? console.log('Parabéns você ganhou'): console.log('Tente Novamente');

const randomNumber = () => randomNum = (Math.random()* 5).toFixed(0);

resultRaffle(1);