const fetch = require('node-fetch');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const templates = require('./public/javascripts/handlebarsTemplates');


var sponsors = templates.sponsors;
var mainpagelistings = templates.mainpagelistings;
/*
var data = {
    mainpagelistings:mainpagelistings,
    sponsors:sponsors,
};
*/

router.get('/', async (req, res) => {
    //By default, show 3 random jobs by making a call to the readAPI
    //every day or so, also update the sponsors and serve the data.
    console.log("/GET index");
    const listings = await fetch("http://read_api:5000/listings")
        .then(api_res => api_res.json());

    console.log("Fetch returend: ", listings);

    if(listings == null) {
        res.send("error");
    }

    return res.render('index', { data: {mainpagelistings: listings} });
});

router.get('/searchjobs', (req, res, next) => {
    //Get the search parameters from the header fields + filters
    //and make a call to the readAPI.
    console.log("GET /searchjobs in the making");
});

router.get('/postpopup', (req, res, next) => {
    //Basically show the popup that is now done through the index.hbs file
    console.log("GET /postpopup in the making");
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
