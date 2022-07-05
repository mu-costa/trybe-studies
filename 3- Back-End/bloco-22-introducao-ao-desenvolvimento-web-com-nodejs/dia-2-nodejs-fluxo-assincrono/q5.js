const fs = require('fs').promises;

Promise.all([
    'Finalmente',
    'estou',
    'usando',
    'Promise.all',
    '!!!'
]).then((arr) =>{
    arr.forEach((e, index) => {
        return fs.writeFile(`./file${index + 1}.txt`, JSON.stringify(e))
        .then(() => console.log('Arquivo escrito com sucesso'))
        .catch((err) => console.log(err));
    })
})
  .catch((err) => console.log(err));

