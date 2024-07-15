const express = require("express");
const navs = require("../mocks/_nav.json");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ navs });
});

module.exports = router;
