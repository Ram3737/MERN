const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");

router.get("/resume", pdfController.downloadResumePdf);

module.exports = router;
