// Edit portfolio page so that it contains RPS game and Clicky game

// Create route handling in server for all pages and 404 page

// Create a login page with session that eventually expires

// Redeploy to heroku

var express = require('express');


var app = express();
var PORT = process.env.PORT || 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

app.get("/portfolio", function(req, res) {
  res.sendFile(process.cwd() + "/views/portfolio.html");
});

app.get("/services", function(req, res) {
  res.sendFile(process.cwd() + "/views/services.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(process.cwd() + "/views/contact.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});