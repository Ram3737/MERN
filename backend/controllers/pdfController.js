const fs = require("fs");
const path = require("path");

const downloadResumePdf = async (req, res, next) => {
  const filename = "Sriram.pdf";
  const pdfPath = path.join("pdfs", "Sriram.pdf");
  fs.readFile(pdfPath, (err, data) => {
    if (err) {
      return next(err);
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="' + filename + '"');
    res.send(data);
  });
};

module.exports = {
  downloadResumePdf,
};
