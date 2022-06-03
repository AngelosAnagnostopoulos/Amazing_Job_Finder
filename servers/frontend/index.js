const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route");
const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");


var app = new express();
var port = 3000;

app.set('view engine', 'hbs');
app.set('views', './views');

app.set('trust proxy', 1);

app.use(express.static("public"));
app.use(express.static("views"));

let RedisStore = connectRedis(session);
const redisClient = redis.createClient({
    socket: {
        host: 'rdb',
        port: 6379,
    }
});

redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

redisClient.connect();

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: "publicsecretxd",
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 1000*60*60 // 1 hour (ms)
    }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);

app.listen(port, function (err) {
    if (typeof (err) == "undefined") {
        console.log("Your application is running on : " + port + " port");
    }
});
