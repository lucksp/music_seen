// User Data for login details

var mongoose 	= require('mongoose');

// User Model/Schema
var tourSchema 	= mongoose.Schema({
			tourName	: String,
			tourLogo	: String,
			tourDate	: String,
			venueName	: String,
			venueAddy	: String
	})

	// Export
	module.exports = mongoose.model('Tour', tourSchema)