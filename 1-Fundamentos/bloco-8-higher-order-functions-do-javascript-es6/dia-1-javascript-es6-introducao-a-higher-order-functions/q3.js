//Crie uma HOF que receberá três parâmetros.
//O primeiro será um array de respostas corretas (Gabarito)
//o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
//terceiro é uma função que checa se as respostas estão corretas 
//e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos
//e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (RIGHT_ANSWERS,STUDENT_ANSWERS,function () {
        let rightReplys = 0;
        let wrongReplys = 0;
        let finalNote = 0;
        for (const iterator in RIGHT_ANSWERS) {
            if (STUDENT_ANSWERS[iterator] != 'N.A'){
            STUDENT_ANSWERS[iterator] == RIGHT_ANSWERS[iterator] ? rightReplys+=1 : wrongReplys+=1;
        }
      }
      finalNote = rightReplys - (0.5 * wrongReplys);
      console.log('A nota final é : ' + finalNote);
     
})

checkAnswers();