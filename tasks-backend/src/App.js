// Importações externas
const express = require('express');
const knex = require('knex');
const consign = require('consign');

// Importações internas
const db = require('./config/db');

// Aplicação
const app = express();
const app_port = 3000;

consign()
    .include('./src/config/passport.js')
    .then('src/config/middlewares.js')
    .then('src/api')
    .then('src/config/routes.js')
    .into(app);

app.db = db;

app.get("/", (request, response) => {
    response.status(200).send("Meu backend!");
});

app.listen(app_port, () => {
    console.log('backend executando...');
});