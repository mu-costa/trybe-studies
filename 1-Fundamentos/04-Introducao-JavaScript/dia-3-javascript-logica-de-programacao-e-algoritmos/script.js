function q1() {
  let asteriscos = "*****";
  for (let index = 0; index < 5; index++) {
    console.log(asteriscos);
  }
}
q1();
/* 
n = 5
*
**
***
****
***** 
*/
function q2() {
  let asterisco = "*";
  let linha = '';

  for (let index = 0; index < 5; index++) {
    linha = linha + asterisco;
    console.log(linha);
  }
}
q2();