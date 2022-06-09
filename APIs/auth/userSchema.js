const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: { type: String, index: true},
	hashed_password: String
});


module.exports = userSchema;
