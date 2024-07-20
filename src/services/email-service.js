const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
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

// Fetch all the emails , that are pending before timestamp
const fetchPendingEmails = async (timestamp) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.getAll();
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sendBasicMail,
  fetchPendingEmails,
};
