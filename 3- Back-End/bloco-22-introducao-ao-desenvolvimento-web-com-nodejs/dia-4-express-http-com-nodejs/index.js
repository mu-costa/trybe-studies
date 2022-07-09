const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/ping', (_req, res) => {
    res.json({ message: 'pong'});
});

app.listen(3001,() =>{
    console.log("Aplicação rodando");
})