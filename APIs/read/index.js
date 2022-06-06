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

	console.log([req.params.title || "", req.params.limit, req.params.offset]);
	const query = {
		text: "SELECT * FROM all_jobs_detailed_listing_view WHERE title LIKE $1 LIMIT $2 OFFSET $3;",
		values: [`%${req.query.title || ""}%`, req.query.limit, req.query.offset]
	};

		
	client.query(query)
		.then(data => {
			console.log(data.rows);
			res.send(data.rows);
		});
});

app.get("/listings/:listingID", (req, res) => {
	console.log(req.params);
	const query = {
		text: "SELECT * FROM all_jobs_detailed_listing_view WHERE listing_id = $1;",
		values: [req.params.listingID]
	};

	client.query(query)
		.then(data => {
			if(data.rowCount == 0){
				res.status(404).send("No data!");
				return;
			}
			
			res.send(data.rows);
		});
});

app.get("/authidtodata/:authID", (req, res) => {
	console.log("GET/ authidtodata/", req.params.authID); 
	const query = {
		text: "SELECT person_id, username FROM person WHERE person_auth_id = $1;",
		values: [req.params.authID]
	};

	client.query(query)
		.then(data => {
			if(data.rowCount == 0){
				res.json({status: "error"});
				return;
			}
			
			res.json({status: "success", userID: data.rows[0].person_id, username: data.rows[0].username});
		});
});
// 404
app.get("*", (req, res) => {
	res.status(404).send("Not found!");
});

// run dev server
app.listen(SERVE_PORT, () => console.log("Read api listening"));
