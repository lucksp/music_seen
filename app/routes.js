// HTTP ROUTING

var countryData 		= require('./models/countries.geo.json')
var ctrls 				= require('../controllers/Ctrl.lastFM.js')
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

// Page Routes
// \\// INDEX
apiRouter.get('/', function (req, res){
    res.sendFile('index.html', {root: './public/html'})
})
// \\// INSIGHTS
apiRouter.get('/insights', function (req, res){
    res.sendFile('insights.html', {root: './public/html'})
})

apiRouter.post('/tours', function (req, res){
	res.send({success:'success'})
})

// \\// LOCALS
apiRouter.get('/locals', function (req, res){
    res.sendFile('locals.html', {root: './public/html'})
})

// \\// PROCESS REGISTRATION DATA
apiRouter.get('/login', function(req, res){
	res.sendFile('login.html', {root: './public/html'})
})

apiRouter.get('/register', function(req, res){
	res.sendFile('register.html', {root: './public/html'})
})

apiRouter.post('/success', passport.authenticate('local-signup', {
	successRedirect 	: '/profile',
	failureRedirect		: '/register',
	// failureFlash		: true
}))


// \\// PROCESS LOGIN DATA
// apiRouter.post('/login', )

// \\// PROFILE PAGE
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)

apiRouter.get('/profile', function(req, res){
	res.sendFile('profile.html', {root: './public/html'})
})
// apiRouter.get('/profile', isLoggedIn, function(req, res){
// 	res.sendFile('profile.html', {root: './public/html'}),
// 	res.send({ user : req.user }) // get the user out of session and pass to template
// })

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
