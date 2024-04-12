const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicMail } = require("./services/email-service");
const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);

    sendBasicMail(
      "support@admin.com",
      "shriniwas.dhage21@pccoepune.org",
      "Fiercy Russian Hacker",
      "You are hacked again :)"
    );
  });
};

setupAndStartServer();
