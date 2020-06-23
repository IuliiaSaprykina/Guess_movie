const express = require("express");
const { request } = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.json({ message: "Bo-bo-bo" })
})

module.exports = router
