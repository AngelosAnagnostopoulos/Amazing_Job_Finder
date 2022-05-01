const fs = require('fs');
const express = require('express');
const router = express.Router();


// Use the readAPI to fetch from db. This works in testing!


// var data = {
//     title: "Software engineer",
//     workhours: "Full time - On-site",
//     // Use 200 or so first characters from the long description and finish with '...'
//     description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
//     company: "ATALLAS CERAMICA",
//     location: "Patras",
//     postdate: "Posted at: 2 days ago"
// };

var data = {
    first: {
        title: "Software engineer",
        workhours: "Full time - On-site",
        // Use 200 or so first characters from the long description and finish with '...'
        description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
        company: "ATALLAS CERAMICA",
        location: "Patras",
        postdate: "Posted at: 2 days ago"
    },
    second: {
        title: "Aids engineer",
        workhours: "Full time - On-site",
        // Use 200 or so first characters from the long description and finish with '...'
        description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
        company: "ATALLAS CERAMICA",
        location: "Patras",
        postdate: "Posted at: 2 days ago"
    },
    third: {
        title: "SuperAids engineer",
        workhours: "Full time - On-site",
        // Use 200 or so first characters from the long description and finish with '...'
        description: "Sample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSampleSample textSample textSample textSample textSD                                                                a     ",
        company: "ATALLAS CERAMICA",
        location: "Patras",
        postdate: "Posted at: 2 days ago"
    }
};

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

router.post('/postpopup', (req, res, next) => {
    fs.readFile("./views/postpopup.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
    return;
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