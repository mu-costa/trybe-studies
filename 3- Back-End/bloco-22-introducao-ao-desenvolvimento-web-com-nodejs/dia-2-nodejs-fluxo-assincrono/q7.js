const readline = require('node:readline');

const {stdin : input , stdout: output} = require('node:process');

const rl = readline.createInterface({ input, output });

const fs = require('fs').promises;

rl.question('Qual arquivo ela deseja modificar', (answer) =>{
    fs.readFile(answer, 'utf-8')
    .then((file) => {
        rl.question('Digite a palavra a ser substituída: ', (answer) =>{
            const parseFile = JSON.parse(file);
            const existsWord = parseFile.includes(answer);
            const wordToBeReplaced = answer;
            if (existsWord){
                rl.question('Digite a palavra que irá substituí-la ', (novaPalavra) =>{
                    let newFile = parseFile.replace(new RegExp(wordToBeReplaced, 'g'), novaPalavra);
                    rl.question('Qual o caminho de destinho? ', (answer)=>{
                        const text = JSON.stringify(newFile);
                        console.log(text);
                        fs.writeFile(`${answer}`, text);
                        rl.close;
                    })
                })
            }
        });
    })
    .catch((err) => console.log(err));
    rl.close;
});