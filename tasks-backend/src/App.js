const express = require('express');
const knex = require('knex');
const app = express();
const app_port = 3000;

app.get("/", (request, response) => {
    console.log("func 1");
    response.status(200).send("Meu backend!");
});

app.listen(app_port, () => {
    console.log('backend executando...');
});