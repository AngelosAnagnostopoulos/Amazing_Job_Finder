const fs = require('fs');
const express = require('express');
const router = express.Router();
const templates = require('./public/javascripts/handlebarsTemplates');


var listings = templates.listings;
var sponsors = templates.sponsors;

var data = {
    listings:listings,
    sponsors:sponsors
};

console.log(data.sponsors);

router.get('/', (req, res) => {
    res.render('index', { data: data });
});

router.get('/searchjobs', (req, res, next) => {
    fs.readFile("./views/joblist.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
    return;
});

// router.post('/postpopup', (req, res, next) => {
//     fs.readFile("./views/postpopup.html", function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
//     return;
// });

router.post('/postpopup', (req, res, next) => {
    console.log("In the making");
    next();
});

router.get('/login', (req, res, next) => {
    fs.readFile("./views/login.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
    return;
});

router.get('/signup', (req, res, next) => {
    fs.readFile("./views/signup.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
    return;
});


module.exports = router;