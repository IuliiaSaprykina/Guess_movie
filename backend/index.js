const express = require("express");
const { request } = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const questions = require("./routes/questions");
const index = require("./routes/index");

app.use("/", index);
app.use("/questions", questions);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})