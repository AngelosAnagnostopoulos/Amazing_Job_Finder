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

function mustBeLoggedIn(req, res, next) {
    
    console.log("Must be logged in middleware!");
    console.log("session:", req.session);

    if(req.session.userID) {
        console.log("Logged in, go ahead");
        return next();
    }

    console.log("Not logged in, redirecting!");
    return res.redirect("/");
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

router.post('/postjob', mustBeLoggedIn, (req, res, next) => { 
    //Use the writeAPI to make a listing with the fields given in the responsive.js and reroute the user to '/'
    console.log("POST /postjob");
    
    console.log(req);
});

router.get('/login', (req, res, next) => {
    console.log("GET /login");
    
    res.render("login");
});

router.post('/login', async (req, res, next) => {
    console.log("POST /login body:", req.body, "query", req.query);

    const api_res = await fetch("http://auth_api:5050/authorize", {
        method: "POST",
        body: JSON.stringify({
            "username": req.body.username,
            "password": req.body.password
        }),
        headers: {'Content-Type': 'application/json'}
    });

    const response = await api_res.json();

    console.log(response);

    if(!response || response["status"] == "error"){
            console.log("Error authorize:", response["description"]);
            return res.render("login", {"error": response["description"]});
    }
    
    const data_res = await fetch("http://read_api:5000/authidtodata/" + response["authUserID"]); 
    const user_res = await data_res.json();

    console.log(user_res);
    
    if(!user_res || user_res["status"] == "error") {
       console.log("Errot getting user data!");
        return res.send(503);
    }

    // FIXME: session is undefined
    req.session.userID = user_res["userID"];
    req.session.username = user_res["username"];
    
    console.log("Session created!");

    return res.redirect("/");
});

router.get('/signup', (req, res, next) => {
    console.log("/signup");
});

router.post('/signup', async (req, res, next) => {
    console.log("POST /signup");

    const auth_api_res = await fetch("http://auth_api:5050/create", {
        method: "POST",
        body: JSON.stringify({
            "username": req.query.username,
            "password": req.query.password
        }),
        headers: {'Content-Type': 'application/json'}
    });


    const auth_api_json = await auth_api_res.json();
    console.log("AUTH API response:", auth_api_json);


    if(!auth_api_json || auth_api_json["status"] == "error") {
       console.log("Error creating user to auth!");
        return res.send(503);
    }

    const write_res = await fetch("http://write_api:6000/createuser", {
        method: "POST",
        body: JSON.stringify({
            user_auth_id: auth_api_json.authUserID,
            username: auth_api_json.username
        }),
        headers: {'Content-Type': 'application/json'}
    } ); 

    const write_res_json = await write_res.json();
    console.log(write_res_json);

    if(!write_res_json || write_res_json["status"] == "error") {
       console.log("Errot creating user to postgres!");
        return res.send(503);
    }


    console.log("Success creaing user!");

    return res.redirect("/");
});

router.post('/logout', (req, res, next) => {
    req.session.destroy();

    res.redirect("/");
});

router.get('/profile', (req, res, next) => {
    console.log("GET /profile in the making");
});

router.post('/profile', (req, res, next) => {
    console.log("POST /profile in the making");
});

module.exports = router;
