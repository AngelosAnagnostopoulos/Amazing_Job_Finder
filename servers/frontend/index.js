const express = require("express");
var hbs = require('hbs');
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

app.use(express.static("frontend"));
app.use(express.static("public"));
app.use(express.static("views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);

// Use the readAPI to fetch from db. This works in testing!
var data = {
    description : "Ζητείται πωλητης-πωλήτρια σε κατάστημα πλακιδίων-ειδών υγιεινής στην Πάτρα (ATALLAS CERAMICA ). Απαραίτητη προϋπηρεσία στην πώληση. Πλήρης απασχόλ...",

    location : "Patras",
    
    company : "ATALLAS CERAMICA",
    
    title : "Retailer",
    
    postdate : "Posted at: 2 days ago"
};
