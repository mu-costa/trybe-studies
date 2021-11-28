const sum = require("./sum");

describe('Função soma', () => {
    it('A soma de 4 e 5 retorna 9', () =>{
        expect(sum(4,5)).toEqual(9);
    })
    it('A soma de 0 e 0 retorna 0', ()=>{
        expect(sum(0,0)).toEqual(0);
    })
    it ('Erro ao se introduzir um valor que não é um number', ()=>{
        expect(sum(4,'5')).toEqual(9);
    })
});
