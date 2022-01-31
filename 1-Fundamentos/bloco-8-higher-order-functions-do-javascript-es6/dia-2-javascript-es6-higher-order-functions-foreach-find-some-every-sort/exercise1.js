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
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  // Solução da primeira questão
  function authorBornIn1947(arr) {
    // escreva aqui o seu código
    const yearsBirthday = [];
    let name = '';

    arr.forEach ((element) => yearsBirthday.push(element.author));

    yearsBirthday.find((element)=> {
        if(element.birthYear === 1947){
            name = element.name;
        }
    });

    return name;
  }
  //Solução da segunda questão
  function smallerName(arr) {
    let nameBook;
    //primeiro passo criar um array somente com os nomes dos livros
    let namesBooks = [];
    arr.forEach( (element) => namesBooks.push(element.name));
    //segundo passo: juntar o nome e remover os espaços entre as letras
    //terceiro passo encontrar o livro cujo nome tem o menor tamanho;
      
    let smallerName = namesBooks[0];
    let indexOfSmallerName = 0;
    namesBooks.forEach((element,index) =>{
        //remove os espaços do string para poder compará-las
        element = element.split(' ').join('');
        smallerName = smallerName.split(' ').join('');

        if(smallerName.length > element.length){
            smallerName = element;
            indexOfSmallerName = index;
        }
    });
    return namesBooks[indexOfSmallerName];
  }


  function getNamedBook (arr){
    const findName = arr.find((book)=> book.name.length === 26);
    return findName.name;
  }


function booksOrderedByReleaseYearDesc(arr) {
  // ordene os livros por data de lançamento em ordem decrescente
  books.sort( (a , b) => {
    if (a.releaseYear > b.releaseYear){
      return -1;
    }
    if (b.releaseYear > a.releaseYear){
      return 1;
    }
  })
  return books;
}
console.log(booksOrderedByReleaseYearDesc(books));