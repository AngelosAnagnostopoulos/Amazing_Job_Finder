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

async function searchJobs(serachParams, count=10, offset=0) {
    let URI = "http://read_api:5000/listings";
   
    let parameters = {"offset": offset, "count" :count};

    if(serachParams?.searchbox) 
        parameters["title"] = serachParams.searchbox;

    if(serachParams?.zips) 
        parameters["zipcode"] = serachParams.zips;

    URI += "?" + Object.entries(parameters).map(elem => `${elem[0]}=${elem[1]}`).join('&');
    console.log("search jobs: ", URI);

    const listings = await fetch(URI)
        .then(api_res => api_res.json());


    return listings;
}

router.get('/', async (req, res) => {
    //By default, show 3 random jobs by making a call to the readAPI
    //every day or so, also update the sponsors and serve the data.
    console.log("/GET index");
    const listings = await searchJobs(null, count=2); 

    if(listings == null) {
        res.send("error");
    }

    return res.render('index', { data: {mainpagelistings: listings} });
});

router.get('/searchjobs', async (req, res, next) => {
    //Get the search parameters from the header fields + filters
    //and make a call to the readAPI.
    console.log("GET /searchjobs");
    console.log(req.query);
    const listings = await searchJobs(req.query); 

    if(listings == null) {
        res.send("error");
    }

    return res.render('index', { data: {mainpagelistings: listings} });

});

router.get('/postpopup', (req, res, next) => {
    //Basically show the popup that is now done through the index.hbs file
    console.log("GET /postpopup in the making");
});

router.post('/postpopup', (req, res, next) => {
    //Use the writeAPI to make a listing with the fields given in the responsive.js and reroute the user to '/'
    console.log("POST /postpopup in the making");

    console.log(req);
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
