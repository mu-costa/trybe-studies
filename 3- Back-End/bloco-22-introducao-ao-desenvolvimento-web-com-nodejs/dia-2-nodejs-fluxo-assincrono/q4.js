const fs = require('fs').promises;

const file = 'simpsons.json';

const filterById  = (array, ids) => {
    let filterArray = [...array];
    ids.forEach((id) => {
        const newArray = filterArray.filter((e) => e.id !== id)
        filterArray = [...newArray];
    })
    return filterArray;
}

const changeFile = (array) => {
    return fs.writeFile('./simpsons.json', JSON.stringify(array))
      .then(() =>  console.log("Arquivo escrito com sucesso"))
      .catch((err) => console.log(err));
}

const filterCharacters = (...id) => {
    return fs.readFile(file, 'utf-8')
             .then((data) => JSON.parse(data))
             .then((arr) => {
                const ids = [...id];
                return filterById(arr, ids);
             })
             .then((data) => {
                 const fileChanged = JSON.stringify(data);
                return changeFile(fileChanged);
             })
             .catch((err) => console.log(err));
}

filterCharacters('10', '6').then((e) => console.log(e));