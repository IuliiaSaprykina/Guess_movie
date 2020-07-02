
exports.up = function(knex) {
  return knex.schema.createTable("user", table => {
      table.increments()
      table.string("username")
      table.string("password_digest")
      table.integer("score")
      table.text("image")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user")
};
