// Importações externas
const express = require('express');
const knex = require('knex');
const consign = require('consign');

// Importações internas
const db = require('../config/db');

// Aplicação
const app = express();
const app_port = 3000;


consign()
    .then('./config/middlewares.js')
    .into(app);

app.db = db;

app.get("/", (request, response) => {
    console.log("func 1");
    response.status(200).send("Meu backend!");
});

app.listen(app_port, () => {
    console.log('backend executando...');
});