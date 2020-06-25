const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const knex = require("knex");
const jwt = require("jsonwebtoken")
const { request, response } = require("express");
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

const login = (request, response) => {
    const { username, password } = request.body
    database("user")
        .select()
        .where({ username })
        .first()
        .then(user => {
            if (!user) throw new Error("No user by that name") 

            return bcrypt.compare(password, user.password_digest)
                .then(passwordDidMatch => {
                    if (!passwordDidMatch) throw new Error("Wrong password!")
                    return user
                })
        }).then (user => {
            const secret = "HERESYOURTOKEN"
            jwt.sign(user, secret, (error, token) => {
                if (error) throw new Error("Problem signing jwt")
                
                // console.log(user, secret, token)
                response.json({ token })
            })
        }).catch(error => {
            response.status(401).json({
                error: error.message
            })
        })
}

const allUsers = (request, response) => {
    database("user").select()
        .then(user => {
            response.json({ user })
        })
}

function authenticate(request, response, next){
    const token  = request.headers.authorization.split(" ")[1]
    console.log(token)
    const secret = "HERESYOURTOKEN";
    if (!token) {
        response.sendStatus(401)
    }
    let id = null
    try {
        id = jwt.verify(token, secret)
    } catch(error){
        response.sendStatus(403)
    }
    const user = database("user")
        .select()
        .where("id", id)
        .first()

    request.user = user;
    next();
}

app.post("/users", createUser);
app.post("/login", login);
app.get("/users", allUsers);
app.get("/questions", authenticate, (request, response) => {
    database("questions").select()
        .then(questions => {
            response.json({ questions })
        })
})

app.listen(PORT, () => console.log(`Listening on ... ${PORT}`))