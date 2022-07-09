const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/ping', (_req, res) => {
    res.json({ message: 'pong'});
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