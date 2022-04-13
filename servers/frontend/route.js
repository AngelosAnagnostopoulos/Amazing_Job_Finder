const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/searchjobs', (req, res,next)=>{
    fs.readFile("./views/joblist.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    return;
});

router.post('/postpopup', (req, res,next)=>{
    fs.readFile("./views/postpopup.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    return;
});

module.exports = router;