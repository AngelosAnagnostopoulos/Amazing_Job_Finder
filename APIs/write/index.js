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
	const data = req.body;
	console.log("/createjoblisting ");

	const query = {
		text: "INSERT INTO job_listing (title, jtype, jlocation, det_desc, salary, position_id, poster_id, company_id) VALUES " +
			  "($1, $2, $3, $4, $5, $6, $7, $8);",
		values: [data.title, data.onsite, data.location, data.longdescription, data.salary, 1 /* get pos id*/, data.userID, Math.floor(Math.random() * 3)+1/*Should query the slaveDB and ask for entries count*/]
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
	console.log(req.body);

	const query = {
		text: "INSERT INTO person(person_auth_id, username, email, user_type) VALUES ($1, $2, $3, $4);",
		values: [req.body.user_auth_id, req.body.username, req.body.email, req.body.user_type]
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

					return res.json({status: "success", ...data.rows[0]});
				});
		})
		.catch(err => res.json({status: "error"}));

});

app.post("/applytojob", (req, res) => {
	console.log("/applytojob");
	console.log(req.body);

	const query = {
		text: "INSERT INTO job_application(job_listing_id, searcher_id, application_text) VALUES ($1, $2, $3);",
		values: [req.body.job_listing_id, req.body.userID, req.body.application_text]
	};

	client.query(query)
		.then(data => res.json({status: "success"}))
		.catch(err => res.json({status: "error"}));	
});
// run dev server
app.listen(SERVE_PORT, () => console.log("Write api listening"));
