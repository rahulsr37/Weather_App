const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const hbs = require("hbs");
const public_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

console.log(public_path);
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(public_path));

app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("errorpage");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
