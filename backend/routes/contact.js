const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.post("/ram", contactController.contactRam);

module.exports = router;
