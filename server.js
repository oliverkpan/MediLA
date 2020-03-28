const express = require("express");
require("dotenv").config();
const app = express();
const SERVER_PORT = process.env.SERVER_PORT;
const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

const sendAlert = () => {
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: TWILIO_PHONE_NUMBER,
      to: MY_PHONE_NUMBER
    })
    .then(message =>
      console.log(`Message ${message.sid} sent to ${MY_PHONE_NUMBER}!`)
    );
};

app.get("/", (req, res) => {
  sendAlert();
  res.send("Hello World!");
});

app.listen(SERVER_PORT, () =>
  console.log(`Example app listening on port ${SERVER_PORT}!`)
);
