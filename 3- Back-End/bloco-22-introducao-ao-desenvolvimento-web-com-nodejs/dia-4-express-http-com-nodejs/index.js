const express = require('express');
const cors = require('cors');
const fs = require('fs');

const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/ping', (_req, res) => {
    res.json({ message: 'pong'});
});

app.get('/simpsons', (_req,res) => {
    const simpsons = fs.readFileSync('./simpsons.json','utf-8');
    res.status(200).send(simpsons);
});

app.get('/simpsons/:id', (req,res) => {
    const { id } = req.params;
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.json','utf-8'));
    const findSimpson = simpsons.find((e) => e.id === id);

    if(!findSimpson) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).send(findSimpson);

});

app.post('/simpsons', (req, res) =>{
    const { id, name } = req.body;
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.json','utf-8'));
    simpsons.push({ id, name });
    fs.writeFileSync('./simpsons.json', JSON.stringify(simpsons));

    res.status(204).end();
});

app.post('/hello', (req, res) => {
    const { name } = req.body;

    res.json({ message: `Hello, ${name}!`});
});

app.post('/greetings', (req,res) => {
    const { name, age } = req.body;

    if ( age > 17 ){
        return res.status(200).json({ message: `Hello, ${name}!`})
    }else{
        return res.status(401).json({ message: "Unauthorized"})
    }

});

app.put("/users/:name/:age",(req,res) => {
    const { name, age } = req.params;

    res.status(204).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3001,() =>{
    console.log("Aplicação rodando");
});