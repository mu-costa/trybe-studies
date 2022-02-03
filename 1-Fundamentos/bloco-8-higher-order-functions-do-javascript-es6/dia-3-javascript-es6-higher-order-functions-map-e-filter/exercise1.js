const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames() {
    // escreva seu código aqui
    const formated = books.map ((book) =>`${book.name} - ${book.genre} - ${book.author.name}` );
    return formated;
  }
//segunda questão

function nameAndAge() {
    // escreva seu código aqui
    const nameAge = books.map((book)=> ({age : book.releaseYear - book.author.birthYear, author : `${book.author.name}`}))
    .sort((a,b) => a.age - b.age);
    return nameAge;
  }
// terceira questão

function fantasyOrScienceFiction() {
    // escreva seu código aqui
    const filterByGenre = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
    return filterByGenre;
  }
//quarta questão
 function oldBooksOrdered() {
    // escreva seu código aqui
    const orderedByRelease = books.filter((book)=> book.releaseYear <= 1962)
    .sort((a,b) => a.releaseYear - b.releaseYear);
    return orderedByRelease;
  }
//quinta questão
function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const filterMapScienceOrFantasy = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .map((book) => book.author.name)
  .sort();
  return filterMapScienceOrFantasy;
}
//sexta questão
function oldBooks() {
  // escreva seu código aqui
  const orderedByRelease = books.filter((book)=> book.releaseYear <= 1962)
    .map((book) => book.name);
    return orderedByRelease;
}
console.log(oldBooks());