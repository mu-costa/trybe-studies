const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnsw,stuAnsw, callback) => {
   console.log(`O aluno acertou : ${callback(rightAnsw,stuAnsw)} questões`);
}

const calculateScore = (feedback, answers) => {
    let points = 0;
    for (let index = 0; index < answers.length; index+=1) {
        feedback[index] === answers[index] && answers[index] != 'N.A' ? points +=1 : points-= 0.5;        
    }
    return points;
}

checkAnswers(RIGHT_ANSWERS,STUDENT_ANSWERS,calculateScore);