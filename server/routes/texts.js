const express = require("express");
const texts = require("../mocks/texts.json");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ texts });
});

module.exports = router;
