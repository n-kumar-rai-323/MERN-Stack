const pdf = require("pdfkit");
const fs = require("fs");

const pdfGenerate = (text, image) => {
  const doc = new pdf();
  doc.pipe(fs.createWriteStream("output.pdf"));

  doc.fontSize(25).text(text, 100, 100);

  doc.image(image, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  doc.end();
};

pdfGenerate("Hellow Nishan", "image.jpg");
