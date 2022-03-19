const uppercase = require('./q7');

test("Testa se as letras da palavra em questão são convertidas para maiusculo", (done)=>{
    uppercase('murilo', function upperStr(params) {
        try{
            expect(params).toBe('MRILO');
            done();
        }
        catch(error){
            done(error);
        }
    })
})