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

console.log("read api staring!");

let state = false;

client.connect()
	.then(() => {
		state = true;
		console.log("Connected to database");
	})
	.catch(err => {
		console.log("error connecting to database", err);
		process.exit(1);
	});

app.get("/listings", (req, res) => {
	if (!state) {
		res.send("Not active yet!");
		return;
	}
	client.query("SELECT * FROM all_jobs_detailde_listing_view;")
		.then(data => {
			console.log(data.rows);
			res.send(data.rows);
		});
	// res.send("Ok!");
});

app.get("/listings/:listingID", (req, res) => {
	console.log(req.params);
	client.query(`SELECT * FROM job_listing WHERE listing_id = ${req.params.listingID};`)
		.then(data => {
			if(data.rowCount == 0){
				res.status(404).send("No data!");
				return;
			}
			
			res.send(data.rows);
		});
});

// 404
app.get("*", (req, res) => {
	res.status(404).send("Not found!");
});

// run dev server
app.listen(SERVE_PORT, () => console.log("Read api listening"));
