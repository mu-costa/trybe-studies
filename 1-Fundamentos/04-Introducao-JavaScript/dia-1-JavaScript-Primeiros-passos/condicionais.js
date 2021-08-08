/* Exercício da parte do Condições If e Else */

const notaPessoaCandidata = 80;

if (notaPessoaCandidata >= 80){

    console.log("Parabéns, você foi aprovado(o)!");
}
else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60){
    console.log ("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado(o)")
}