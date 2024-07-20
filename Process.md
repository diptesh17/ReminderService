## Purpose of this service => Send the remainder mail using SMTP , we are going to use nodemailer

# Nodemailer => Help to connect with diff emailing service & send email through there SMTP service

# Create fresh mail

- remainderservice3@gmail.com
- Password : Hack wala

# npm init -y

# npm i express nodemon body-parser dotenv mysql2

# npm i sequelize sequelize-cli

# Basic server setup done

# npm i nodemailer

# Generate App pass & mail in security of mail

# Added emailConfig & email-service

# Transporter => going to be an object , thats going to send mail

# Transport =>

# Added some stuff using nodemon in emailConfig , serverConfig , email-service & using this it send the mail

# Begins the scheduling task

- npm i node-cron
- import it & add cron.schedule , it will log after every 1 min

# Setup sequelize

- npx sequelize init
- Add db name & pass in config
- npx sequelize db:create

# creating Model inside src

- npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date

# Added allownull in models & migration

- npx sequelize db:migrate

# Inside utils folder , setup the cron , now its logic time , so will move towards services

- Before service lets interact with model using repository so setup the repository

## Final Process flow

-> Index.js = jobs()
-> Utils = cron schedule
-> Services = find pending emails
