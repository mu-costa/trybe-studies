const { expect } = require('chai');
const { fs } =  require('fs');
const sinon = require('sinon');

const { calculaSituacao } = require('../src/calculaSituacao');
const { writeFile } = require('../src/calculaSituacao');

describe("Testa a primeira função", () => {
    it(("Testa se a função retorna positivo caso o número seja maior que zero"), ()=>{
        // arrange
        const resposta = calculaSituacao(9);
        // act
        // assert 
       expect(resposta).to.be.equals("positivo"); 
    });   

    it(("Testa se a função retorna negativo caso o número seja menor que zero"), ()=>{
        // arrange
        const resposta = calculaSituacao(-9);
        // act
        // assert 
       expect(resposta).to.be.equals("negativo"); 
    });  

    it(("Testa se a função retorna neutro caso o número seja igual a zero"), ()=>{
        // arrange
        const resposta = calculaSituacao(0);
        // act
        // assert 
       expect(resposta).to.be.equals("neutro"); 
    });
    
    it(("Testa se a função retorna um erro caso o parametro informado não seja do tipo Number"), ()=>{
        // arrange
        // assert 
       expect(() => calculaSituacao("casa")).to.throw();
    });      
});


describe('Testa se a função escreverá um conteúdo em um arquivo específico', ()=>{
    it("Testa se ao escrever o contéudo a função retorna um  'ok '",() =>{
        const data = writeFile("mu.txt", 'oi');
        console.log(data);
        expect(data).to.be.equals('ok');
    })
})