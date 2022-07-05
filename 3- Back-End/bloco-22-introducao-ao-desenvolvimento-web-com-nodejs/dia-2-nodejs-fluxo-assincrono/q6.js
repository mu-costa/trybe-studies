const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const fs = require('fs').promises;

rl.question('Qual arquivo voce deseja ler? ', (answer) => {
  fs.readFile(answer, 'utf-8')
  .then((e) => console.log(JSON.parse(e)))
  .catch(() => new Error("Arquivo inexistente"));
  rl.close();
});

