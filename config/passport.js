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
		passwordField		: 'password',
		passReqToCallback	: true
	},
	function(req, username, password, done) {
		console.log('new LocalStrategy is running')
		process.nextTick(function(){
			User.findOne( {'local.username' : username}, function(err, user){
				console.log('checking DB for matching User')
				if (err) {
					return done(err)
					console.log(err)
				}
				else if (user) {
					return done(null, false) //HOW TO ADD A REQ.FLASH MESSAGE?
				}
				else {
					var newUser 			= new User()
					newUser.local.username 	= username
					newUser.local.email 	= req.body.email
					newUser.local.password  = newUser.generateHash(password)
					newUser.local.artist	= req.body.artist
					newUser.local.profilePic= 'img/default_user.png'

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

	// \\ Local Login
	passport.use('local-login', new LocalStrategy({
		usernameField		: 'username',
		passwordField		: 'password',
		passReqToCallback	: true
	},
	function(req, username, password, done){
		User.findOne({ 'local.username' : username}, function(err, user){
			if (err)
				return done(err)
			if (!user)
				return done(null, false) //HOW TO ADD A REQ.FLASH MESSAGE?
			if (!user.validPassword(password))
				return done(null, false) //HOW TO ADD A REQ.FLASH MESSAGE?
			return done(null, user)
		})
	}))
}