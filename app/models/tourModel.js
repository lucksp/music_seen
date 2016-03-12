// User Data for login details

var mongoose 	= require('mongoose');
var User 		= require('./userModel.js')

// User Model/Schema
var tourSchema 	= mongoose.Schema({
			creator		: { type: mongoose.Schema.ObjectId, ref: 'User' },
			tourName	: String,
			tourLogo	: String,
			tourDates	: Array
			// venueName	: String,
			// venueAddy	: String
	})

	// Export
	module.exports = mongoose.model('Tour', tourSchema)