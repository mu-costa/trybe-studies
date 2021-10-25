const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  /* console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida. */
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(
  `Os números ${oddsAndEvens.sort(
    (a, b) => a - b
  )} se encontram ordenados de forma crescente!`
); // será necessário alterar essa linha 😉

const fatorial = (n) => {
  k = 1;
  for (let index = 1; index <= n; index += 1) {
    k *= index;
  }
  return k;
};
console.log(fatorial(4));

//Implementar função que retorna a maior palavra de uma string
const longestWord = (word) => {
  let array;
  array = word.split(" ");
  let longestWord = array[0];
  let sizeWord = longestWord.length;

  for (let index = 0; index < array.length; index++) {
    if (sizeWord < array[index].length) {
      longestWord = array[index];
      sizeWord = array[index].length;
    }
  }
  return longestWord;
};
console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
//Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar 
let skills = ["HTML", "CSS", "JS", "NODE", "REACT"];

function returnWord(word) {
  let array;
  array = word.split(" ");

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] == "x") {
      array[index] = "Bebeto";
    }
  }
  array = array.join(" ");
  return array;
}

let showSkills = (word) => {
  console.log(`"${returnWord(word)}  Minhas cinco principais habilidades são:
    ${skills} #goTrybe"
  `);
};

showSkills("Tryber x aqui!");