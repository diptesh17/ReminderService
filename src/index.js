const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const { sendBasicMail } = require("./services/email-service");

const TicketController = require("./controllers/ticket-controller");
const jobs = require("./utils/job");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
    jobs();

    // sendBasicMail(
    //   "support@admin.com",
    //   "shriniwas.dhage21@pccoepune.org",
    //   "Fiercy Russian Hacker",
    //   "You are hacked again :)"
    // );
  });
};

setupAndStartServer();
