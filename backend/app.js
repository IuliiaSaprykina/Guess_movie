const express = require("express");
const app = express();

const knex = require("knex");
const config = require("./knexfile")["development"]
const database = knex(config)

app.get("/", (request, response) => {
    database("questions").select()
        .then(questions => {
            response.json({ questions })
        })
})

app.listen(3000)