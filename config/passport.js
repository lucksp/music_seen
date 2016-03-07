var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/userModel.js');

module.exports = function(passport) {

	//\\ passport session setup
	passport.serializeUser(function(user, done){
		done(null, user.id)
		console.log('session Serialized')
	})

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user)
			console.log('session DeSerialized')
		})
	})

	//\\ Local Signup
	passport.use('local-signup', new LocalStrategy({
		usernameField		: 'username',
		emailField			: 'email',
		passwordField		: 'password',
		passReqToCallback	: true
	},
	function(req, username, password, done) {
		console.log('new LocalStrategy is running')
		process.nextTick(function(){
			User.findOne({'local.email' : email}, function(err, user){
				console.log('checking DB for matching User')
				if (err)
					return console.log(done(err))
				if (user) {
					return done(null, false) //HOW TO ADAD A REQ.FLASH?
				}
				else {
					var newUser 			= new User()
					newUser.local.username 	= username
					newUser.local.email 	= email
					newUser.local.password  = newUser.generateHash(password)
					newUser.local.artist	= artist

					newUser.save(function(err){
						console.log('saving newUser')
						if (err)
							throw err;
						return done(null, newUser)
					})
				}
			})
			})
	}))	
}