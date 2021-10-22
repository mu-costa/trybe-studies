//criar uma função para retornar se a string como parametro é um palindromo
function verificaPalindrome(word) {
  reverseWord = word.split("").reverse().join("");
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome("murilo"));

function highestValue() {
  let array = [2, 3, 6, 7, 10, 1];
  let highest = array[0];
  let saveIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest < array[index]) {
      highest = array[index];
      saveIndex = index;
    }
  }
  return saveIndex;
}
console.log(highestValue());

function lowestValue() {
  let array = [2, 4, 6, 7, 10, 0, -3];
  let lowest = array[0];
  let saveIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (lowest > array[index]) {
      lowest = array[index];
      saveIndex = index;
    }
  }
  return saveIndex;
}
console.log(lowestValue());

function biggerName() {
  let array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
  let biggest = array[0].length;
  let saveIndex = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggest < array[index].length) {
      biggest = array[index].length;
      saveIndex = index;
    }
  }
  return array[saveIndex];
}
console.log(biggerName());

function repeatingValue() {
  let array = [2, 3, 2, 5, 8, 2, 3];
  let cont = 0;
  let sCont = 0;
  let mostRepeated = array[0];
  for (let index = 0; index < array.length; index += 1) {
    num = array[index];
    for (let index = 0; index < array.length; index += 1) {
      if (num == array[index]) {
        cont += 1;
      }
    }
    if (cont > sCont) {
      mostRepeated = array[index];
      sCont = cont;
    }
    cont = 0;
  }

  console.log(mostRepeated);
}
repeatingValue();

function summation(n) {
  let k = 0;
  for (let index = 0; index <= n; index += 1) {
    k += index;
  }
  return k;
}
console.log(summation(5));

function finalSyllabe(word, ending) {
  let arrayWord = word.split("");
  let arrayEnding = ending.split("");
  let lengthWord = arrayWord.length;
  let lengthEnding = arrayEnding.length;

  if (
    arrayWord[lengthWord - 1] == arrayEnding[lengthEnding - 1] &&
    arrayWord[lengthWord - 2] == arrayEnding[lengthEnding - 2]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(finalSyllabe("joaofernando", "fernan"));
