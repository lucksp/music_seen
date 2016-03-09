// HTTP ROUTING

var countryData 		= require('./models/countries.geo.json')
var ctrlCountryData		= require('../controllers/ctrl.lastFM.countryData.js')
// var ctrlD3Geo			= require('../controllers/ctrl.d3.js')
var apiRouter 			= require('express').Router()
var db 					= require('./models/userModel.js')
var mongoose 			= require('mongoose')
var passport			= require('passport')
var bcrypt 				= require('bcrypt-nodejs')

//||\\ API routes

// JSON Sends
apiRouter.get('/api/lib', function(req, res){
	res.json(countryData)
	console.log('sending geoJSON from server')
})

apiRouter.get('/api/d3', function(req, res){
	res.json(countryData)
	console.log('sending geoJSON from server')
})

// Page Routes
// \\// SHELL
apiRouter.get('/', function (req, res){
    res.sendFile('shell.html', {root: './public/html'})
})

apiRouter.post('/tours', function (req, res){
	res.send({success:'success'})
})

// \\// PROCESS REGISTRATION DATA

apiRouter.post('/register', function(req, res, next){
	var signMeIn = passport.authenticate('local-signup', function(err, user){
		if (err){
			res.send(err)
			console.log(err)
		}
		else {
			req.login(user, function(){
				console.log('successful POST register')
				res.send({ success:'success' })	
			})
		}
	})
	signMeIn(req, res, next)
})


// \\// PROCESS LOGIN DATA
apiRouter.post('/login', function(req, res, next){
	var logMeIn = passport.authenticate('local-login', function(err, user){
		if(err){
			res.send('could not log in', err)
			console.log(err)
		}
		else {
			req.login(user, function(){
				res.send({success:'success'})
			})
		}
	})
})

// \\// PROFILE PAGE

apiRouter.get('/profile', isLoggedIn, function(req, res){
	res.send({user:req.user})
})

apiRouter.post('/update', function (req, res){ // ** ADD ISLOGGED IN
	res.send({success:'success'})
})

apiRouter.post('/tours', function (req, res){ // ** ADD ISLOGGED IN
	res.send({success:'success'})
})

// \\// LOGOUT USER
apiRouter.get('/logout', function(req, res){
	req.logout();
	res.redirect('/')
})


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){
	    // if user is authenticated in the session, carry on 
	    if (req.isAuthenticated()){
	    	return next()
	    }
        // if they aren't redirect them to the home page
        res.redirect('/')
}

// Exports
module.exports = apiRouter
