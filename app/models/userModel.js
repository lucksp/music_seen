// User Data for login details

var mongoose 	= require('mongoose');
var bcrypt		= require('bcrypt-nodejs')

// User Model/Schema
var userSchema 	= mongoose.Schema({
		local			: {
			username	: {type: String, required: true, unique: true},
			email		: {type: String, required: true},
			password	: {type: String, required: true},	
			artist		: {type: String, required: true},
			profilePic	: String
		}
	})

	// methods
	// generating a hash
	userSchema.methods.generateHash = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
	}

	// checking if password is valid
	userSchema.methods.validPassword = function(password) {
		return bcrypt.compareSync(password, this.local.password)
	}


	// Export
	module.exports = mongoose.model('User', userSchema)