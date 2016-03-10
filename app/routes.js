// HTTP ROUTING
var fs					= require('fs')
var countryData 		= require('./models/countries.geo.json')
// var tagJson				= require('./models/tagjson.geo.json')
var countryTopTags		= require('../controllers/ctrl.lastFM.countryData.js')
var apiRouter 			= require('express').Router()
var db 					= require('./models/userModel.js')
var mongoose 			= require('mongoose')
var passport			= require('passport')
var bcrypt 				= require('bcrypt-nodejs')
var ctrlTours			= require('../controllers/ctrl.Tours.js')
//||\\ API routes

// Data Sends
apiRouter.get('/api/lib', function(req, res){
	res.json(countryData)
	// console.log('sending geoJSON from server')
})

apiRouter.get('/api/getTags', function(req, res){
	var tagJson = fs.readFileSync('./app/models/tagjson.geo.json', 'utf-8')
	console.log('sending TAGjson from server')
	res.json(JSON.parse(tagJson))
});

// Page Routes
// \\// SHELL
apiRouter.get('/', function (req, res){
    res.sendFile('shell.html', {root: './public/html'})
})

// \\// PROCESS REGISTRATION DATA
apiRouter.post('/register', function(req, res, next){
	var signMeIn = passport.authenticate('local-signup', function(err, user){
		if (err){
			res.send({ error: err})
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

apiRouter.isAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send({error:'not logged in'});
}

// \\// PROCESS LOGIN DATA
apiRouter.post('/login', function(req, res, next){
	var logMeIn = passport.authenticate('local-login', function(err, user){
		if (err){
			console.log(err)
			res.send({ error: err})
		}
		else{
			res.send({ success:'success' })
		}
	})
	logMeIn(req, res, next)
})
// apiRouter.post('/login', function(req, res, next){
// 	console.log('Login function received on Server Router')
// 	passport.authenticate('local-login', function(err, user, info){
// 		if(err){
// 			return next(err)
// 			console.log(err)
// 		}
// 		if(!user){
// 			return res.send({error : 'Invalid Username or Password'})
// 		}
// 		else {
// 			req.login(user, function(err){
// 				if (err){
// 					return next(err)
// 				}
// 				return res.send({success:'success'})
// 			})
// 		}
// 	})
// })

// \\// PROFILE PAGE
apiRouter.get('/profile', isLoggedIn, function(req, res){
	res.send({user:req.user})
})

apiRouter.get('/profile/:username', isLoggedIn, function(req, res){
	res.send({user:req.user})
})

apiRouter.post('/update', function (req, res){ // ** ADD ISLOGGED IN
	res.send({success:'success'})
})

apiRouter.post('/tours', ctrlTours.createTour)

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
