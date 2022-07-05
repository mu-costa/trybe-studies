const { fdatasync } = require('fs');

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
             .then((arr) => changeFile(arr))
             .catch((err) => console.log(err));
}

const createFamily = async () => {
    try {
        const response = await fs.readFile(file, 'utf-8');
        let data = await JSON.parse(response);
        data = data.filter((e,index) => {
            if(index < 4){
                return e;
            }
        })
        return fs.writeFile('./simpsonFamily.json', JSON.stringify(data))
                 .then(() => console.log("Arquivo escrito com sucesso"))
                 .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

const insertCharacter = async () => {
    try {
        const response = await fs.readFile(file, 'utf-8');
        const findCharacter = (await JSON.parse(response)).find((e) => e.name === "Nelson Muntz");
        
        const res = await fs.readFile('simpsonFamily.json', 'utf-8');
        let data = await JSON.parse(res);
        data = [...data, findCharacter];
        
        return fs.writeFile('./simpsonFamily.json', JSON.stringify(data))
                .then(() => console.log('Arquivo escrito com sucesso'))
                .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}
/* filterCharacters('10', '6').then((e) => console.log(e));
 */

const changeCharacter = async () => {
    try {
        const response = await fs.readFile('simpsonFamily.json','utf-8');
        const data = await JSON.parse(response);
        data.forEach((e) => {
            if(e.name === "Nelson Muntz") e.name = "Maggie Simpson";
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

changeCharacter().then((e) => console.log(e));