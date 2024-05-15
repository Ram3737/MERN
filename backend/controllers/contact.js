const nodemailer = require("nodemailer");

const transporterSynerixs = nodemailer.createTransport({
  service: "gmail", // use your email service provider
  auth: {
    user: "nksriram37@gmail.com", // replace with your email
    pass: "kxvc lcss hmtf jfxd", // replace with your email password
  },
});

const contactRam = async (req, res) => {
  try {
    const { name, email, subject, description } = req.body;

    const mailOptions = {
      from: "nksriram37@gmail.com", // replace with your email
      to: "nksriram37@gmail.com",
      subject: "'Ram-portfolio',Someone contacted",
      text: `Ram-portfolio',Someone contacted:
      name : ${name}, 
      email : ${email}, 
      subject: ${subject},
      description : ${description}`,
    };

    await transporterSynerixs.sendMail(mailOptions);

    res.status(200).json({ message: "Mailed...!" });
  } catch (error) {
    console.error("ram-portfolio mail send error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  contactRam,
};
