const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");


const SERVE_PORT = 6000;

const db_config = {
	host: "slave_db",
	user: "angelos",
	password: "example",
	port: 5432,
	database: "app"
};

app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const client = new pg.Client(db_config);

console.log("write api staring!");

client.connect()
	.then(() => {
		state = true;
		console.log("Connected to database");
	})
	.catch(err => {
		console.log("error connecting to database", err);
		process.exit(1);
	});


app.post("/createjoblisting", (req, res) => {

	console.log("/createjoblisting ");

	const query = {
		text: "INSERT INTO job_listing (title, jtype, jlocation, det_desc, salary, position_id, poster_id, company_id) VALUES " +
			  "($1, $2, $3, $4, $5, $6, $7, $8);",
		values: Object.values(req.body)
	};

		
	client.query(query)
		.then(data => {
			console.log("Success");
			res.json({status: "success"});
		})
		.catch(err => res.json({status: "error"}));
});

app.post("/createuser", (req, res) => {
	console.log("/createuser");

	const query = {
		text: "INSERT INTO person(person_auth_id, username) VALUES ($1, $2);",
		values: [req.body.user_auth_id, req.body.username]
	};

		
	client.query(query)
		.then(data => {
			console.log("Success creating");
			const user_data_q = {
				text: "SELECT person_id, username FROM person WHERE person_auth_id = $1;",
				values: [req.body.user_auth_id]
			};

			client.query(user_data_q)
				.then(data => {
					if(data.rowCount == 0){
						res.json({status: "error"});
						return;
					}
				
					console.log("Success retreiving back");
					// handle signup BS

					return res.json({status: "success", ...data.rows});
				});
		})
		.catch(err => res.json({status: "error"}));

});
// run dev server
app.listen(SERVE_PORT, () => console.log("Write api listening"));
