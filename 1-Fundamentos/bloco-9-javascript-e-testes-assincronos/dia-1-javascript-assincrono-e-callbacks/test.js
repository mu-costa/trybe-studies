// criar uma função que irá verificar se os valores são númericos
const verifyIsNumber = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Os valores digitados não são númericos');
    }
};

// criar a função que irá somar os valores
const sum = (num1, num2) =>{
    try {
        verifyIsNumber(num1, num2);
        return num1 + num2;
    } catch (error) {
        throw error.message;
    }
};

console.log(sum('5', 3));