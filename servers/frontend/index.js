const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route");

var app = new express();
var port = 3000;

app.set('view engine', 'hbs');
app.set('views', './views');


app.listen(port, function (err) {
    if (typeof (err) == "undefined") {
        console.log("Your application is running on : " + port + " port");
    }
});

app.use(express.static("public"));
app.use(express.static("views"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);