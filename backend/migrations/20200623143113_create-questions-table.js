exports.up = function(knex) {
  return knex.schema.createTable("questions", questions => {
      questions.increments()
      questions.text("shot_src")
      questions.string("choiceA")
      questions.string("choiceB")
      questions.string("choiceC")
      questions.string("choiceD")
      questions.string("correct")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableExists("questions")
};
