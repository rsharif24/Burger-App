var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var orm = require("./config/orm.js");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT)
});