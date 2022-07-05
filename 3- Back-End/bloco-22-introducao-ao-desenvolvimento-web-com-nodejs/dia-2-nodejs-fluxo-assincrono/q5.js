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


  Promise.all([
      fs.readFile('file1.txt','utf-8'),
      fs.readFile('file2.txt','utf-8'),
      fs.readFile('file3.txt','utf-8'),
      fs.readFile('file4.txt','utf-8'),
      fs.readFile('file5.txt','utf-8'),
  ]).then((arr)=>{
      let string = '';
      arr.forEach((e) => {
          string = string + " " + JSON.parse(e);
          return fs.writeFile('./fileAll.txt', JSON.stringify(string));
      })
   })
   .catch((err)=>console.log(err)); 