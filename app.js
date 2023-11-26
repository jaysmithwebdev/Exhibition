import express from "express";
const port = process.env.PORT || 3001;
import exhibits from "./public/data/exhibits.js";
import landing from "./public/data/landing.js";

const app = express();

app.use(express.static("public"));

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
