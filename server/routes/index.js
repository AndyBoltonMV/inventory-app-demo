const express = require("express");
const router = express.Router();

// different model routers
router.use("/sauces", require("./sauces"));
// Adding my Item router to this exported router as it appears to be the bridge that connects my app
router.use("/items", require("./items")); // Again using the same syntax as sauces because I know that works

module.exports = router;
