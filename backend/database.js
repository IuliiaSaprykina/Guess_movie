const config = require("./knexfile")[process.env.NODE_ENV || "development"]
const knex = require("knex");

module.exports = knex(config)