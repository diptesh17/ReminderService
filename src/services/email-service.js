const sender = require("../config/emailConfig");

const sendBasicMail = async (Mailfrom, Mailto, Mailsubject, Mailbody) => {
  try {
    const response = await sender.sendMail({
      from: Mailfrom,
      to: Mailto,
      subject: Mailsubject,
      text: Mailbody,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicMail,
};
