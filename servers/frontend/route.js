const fs = require('fs');
const express = require('express');
const router = express.Router();
const templates = require('./public/javascripts/handlebarsTemplates');


var sponsors = templates.sponsors;
var mainpagelistings = templates.mainpagelistings;

var data = {
    mainpagelistings:mainpagelistings,
    sponsors:sponsors,
};


router.get('/', (req, res) => {
    //By default, show 3 random jobs by making a call to the readAPI
    //every day or so, also update the sponsors and serve the data.
    res.render('index', { data: data });
});

router.get('/searchjobs', (req, res, next) => {
    //Get the search parameters from the header fields + filters
    //and make a call to the readAPI.
    console.log("GET /searchjobs in the making");
});

router.post('/postpopup', (req, res, next) => {
    //Use the writeAPI to make a listing with the fields given in the responsive.js and reroute the user to '/'
    console.log("POST /postpopup in the making");
});

router.get('/login', (req, res, next) => {
    console.log("/login in the making");
});

router.get('/signup', (req, res, next) => {
    console.log("/signup in the making");
});

router.get('/profile', (req, res, next) => {
    console.log("GET /profile in the making");
});

router.post('/profile', (req, res, next) => {
    console.log("POST /profile in the making");
});

module.exports = router;