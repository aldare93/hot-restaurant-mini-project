const express = require('express');
const path = require('path');



const app = express();
const PORT = process.env.port || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const reservations = [];


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/api/tables', (req, res) => res.json(characters));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
