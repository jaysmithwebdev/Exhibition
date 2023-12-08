import express from "express";
const port = process.env.PORT || 3001;
import exhibits from "./public/data/exhibits.js";
import landing from "./public/data/landing.js";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
const fromEmail = process.env.EMAIL;
const apiPass = process.env.EMAILAPIPASSWORD;
const toEmail = process.env.EMAILREC;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  service: "yahoo",
  secure: false,
  auth: {
    user: fromEmail,
    pass: apiPass,
  },
  debug: false,
  logger: true,
});

app.get("/", (req, res) => {
  const links = {
    pageLink: "partials/landing.ejs",
    contentList: landing,
    exhibitList: exhibits,
  };
  res.render("index.ejs", links);
});

app.get("/exhibitone", (req, res) => {
  const links = {
    pageLink: "partials/exhibit.ejs",
    exhibit: exhibits.exhibit1,
  };
  res.render("index.ejs", links);
});

app.get("/exhibittwo", (req, res) => {
  const links = {
    pageLink: "partials/exhibit.ejs",
    exhibit: exhibits.exhibit2,
  };
  res.render("index.ejs", links);
});

app.get("/exhibitthree", (req, res) => {
  const links = {
    pageLink: "partials/exhibit.ejs",
    exhibit: exhibits.exhibit3,
  };
  res.render("index.ejs", links);
});

app.get("/exhibitfour", (req, res) => {
  const links = {
    pageLink: "partials/exhibit.ejs",
    exhibit: exhibits.exhibit4,
  };
  res.render("index.ejs", links);
});

app.get("/contact", (req, res) => {
  const links = {
    contact: "partials/contact.ejs",
  };
  res.render("index.ejs", links);
});

app.post("/contact", async function (req, res) {
  // retrieve info
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const theEmailToSend = {
    from: fromEmail,
    to: toEmail,
    subject: "Contact Me - Pulling At The Threads Of Ableism",
    text:
      "This is a contact me message from the Pulling At The Threads of Ableism site; \nSender: " +
      name +
      "\nTheir Email: " +
      email +
      "\nTheir Message: " +
      message,
  };

  transporter.sendMail(theEmailToSend, function (error, success) {
    if (error) {
      console.log("This is the error " + error);
    } else {
      console.log("Sent " + success.response);
    }
  });
  // redirect to home
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
