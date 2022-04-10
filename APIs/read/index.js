const express = require("express");
const pg = require("pg");


const SERVE_PORT = 5000;

const db_config = {
	host: "slave_db",
	user: "angelos",
	password: "example",
	port: 5432,
	database: "app"
};

app = express();

const client = new pg.Client(db_config);

console.log("Now connecting!");

let state = false;

app.get("/start", (req, res) => {
	if(state)
	{
		res.send("Already running!");
		return;
	}

	client.connect()
		.then(() => {
			state = true;
			console.log("Connected to database");
			}
		)
		.catch(err => console.log("error connecting to database", err));
	
	res.send("Conected xd!");
});

app.get("/", (req, res) => {
	if(!state)
	{
		res.send("Not active yet!");
		return;
	}
	client.query("SELECT * FROM job_listing;")
		.then(data => res.send(data));
	// res.send("Ok!");
});


// run dev server
app.listen(SERVE_PORT, () => console.log("Read api listening"));


