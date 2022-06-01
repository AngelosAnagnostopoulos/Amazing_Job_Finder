const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const userSchema = require("./userSchema");

const SERVE_PORT = 5050;
const SALT_ROUNDS = 10; // this is a toy project

const db_config = {
	host: "localhost",
	user: "angelos",
	password: "example",
	port: 27017,
	database: "authDB"
};

// connect to database
const User = mongoose.model('User', userSchema);
// User.create({username: "test1", password: "secure"});

app = express();
// body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/authorize", async (req, res) => {
	const username = req.body.username;
	const password_plain = req.body.password;

	console.log(`request to authorize user ${username} with pass ${password_plain}`);
	
	const queryResult = await User.findOne({username: username}).exec(); 

	if(!queryResult) {
		res.status(404).send(`No user with username ${username}!`);
		return;
	}

	if(bcrypt.compareSync(password_plain, queryResult.hashed_password)) {
		res.send(queryResult._id);
		return;
	}

	res.status(403).send("Wrong password!");
});


app.post("/create", async (req, res) => {
	const new_username = req.body.username;
	const new_password_plain = req.body.password;

	console.log(`request to create user ${new_username} with pass ${new_password_plain}`);
	
	const queryResult = await User.findOne({username: new_username}).exec(); 

	if(queryResult) {
		res.status(403).send("Username already in use!");
		return;
	}

	const hashed_password =	bcrypt.hashSync(new_password_plain, SALT_ROUNDS);

	User.create({username: new_username, hashed_password: hashed_password}, (err, created_user) => {
		if(err) {
			res.status(501).send("Error creating user!");
			return;
		}

		res.send({user_id: created_user._id, username: created_user.username});
	});

});


mongoose.connect(`mongodb://${db_config["user"]}:${db_config["password"]}@${db_config["host"]}:${db_config["port"]}/${db_config["database"]}`)
// run dev server
	.then(
		() => app.listen(SERVE_PORT, () => console.log("auth api listening")),
		err => {
			console.log("Could not connect to mongo!");
			console.log(err);
			process.exit();
		}
);

