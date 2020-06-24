const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const knex = require("knex");
const { request } = require("express");
const config = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = knex(config);
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
module.exports = knex(config)

const createUser = (request, response) => {
   const { username, password } = request.body

   bcrypt.hash(password, 12)
        .then(hashedPassword => {
            database("user").insert({
                username, password_digest: hashedPassword
            }).returning("*")
        }).then(users => {
            response.json({ user: users[0]})
        })
}
app.post("/users", createUser);

app.get("/questions", (request, response) => {
    database("questions").select()
        .then(questions => {
            response.json({ questions })
        })
})

app.listen(PORT, () => console.log(`Listening on ... ${PORT}`))