var express = require("express");
var path = require("path");
var fs = require("fs");
var bp = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
	// TODO: Add links to index.html so users can navigate
	res.sendFile(__dirname + "/static/html/index.html");
});

app.get("/skills", function (req, res) {
	var skills = fs.readFileSync("./data.json");
	skills = JSON.parse(skills);
	// TODO: Render this array of skills into an EJS template
	res.send(skills);
});

// TODO: Add GET route that retuns static page containing a form

// TODO: Add POST route that writes new skill to the file, redirects to skills index
// TODO Form should have action = "/skills" and method="POST"

app.listen(process.env.PORT || 3000);