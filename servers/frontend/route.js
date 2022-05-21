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


router.get('/', (req, res) => {
    res.render('index', { data: data });
});

router.get('/searchjobs', (req, res, next) => {
    console.log("/searchjobs in the making");
});

router.get('/postpopup', (req, res, next) => {
    console.log("GET /postpopup in the making");
});

router.post('/postpopup', (req, res, next) => {
    console.log("POST /postpopup in the making");
});

router.get('/login', (req, res, next) => {
    console.log("/login in the making");
});

router.get('/signup', (req, res, next) => {
    console.log("/signup in the making");
});


module.exports = router;