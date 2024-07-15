const express = require("express");
const routes = require("../mocks/routes.json");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ routes });
});

module.exports = router;
