const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();
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
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sendBasicMail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
