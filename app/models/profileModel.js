// User Data for login details

var mongoose 	= require('mongoose');

// User Model/Schema
var profileSchema 	= mongoose.Schema({
			profilePic	: String
	})

	// Export
	module.exports = mongoose.model('Profile', profileSchema)