const express = require('express');
const bodyParser = require('body-parser');
const validateValues = require('./validateValues');
const generateToken = require('./generateToken');
const validateToken = require('./validateToken');

const app = express();
const tokenAleatorio = generateToken();

app.use(bodyParser.json());

function validateAccess (req, res, next) {
    const { email, password, firstName, phone } = req.body;
    if(!email || !password || !firstName || !phone) return res.status(401).json({message: 'missing fields'});

    req.Authorization = { token: tokenAleatorio  };
    next();
}

app.post('/signup', validateAccess, (req, res) =>{
    res.status(201).json({ token: tokenAleatorio });
});

app.post('/sales', validateToken, validateValues, (req, res) => {
    res.status(201).json({message: "Venda cadastrada com sucesso" });
});

app.listen(3001, () => console.log("Aplicação rodando"));