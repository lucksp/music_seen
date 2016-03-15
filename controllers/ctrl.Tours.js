var Tour 				= require('../app/models/tourModel.js')
var User 				= require('../app/models/userModel.js')
var async 				= require('async')
var geocoderProvider 	= 'google'
var httpAdapter 		= 'http'
var geocoder 			= require('node-geocoder')(geocoderProvider, httpAdapter);

function createTour(req, res){
	console.log(req.body.tourDates.length)
	console.log('USER', req.user.local.username, 'BODY:', req.body)
	console.log(' I AM THE REQ.BODY ON SUBMIT ', req.body.tourDates)

	var addTourDateData = function(tourDates, tourIndex){
		console.log('i am in the addTourDateData function')
	geocoder.geocode(tour.venue + ', ' + tour.addy)
	    .then(function(resData) {
	        // console.log('I AM THE resDATA from GEOCODER', resData[0].latitude, resData[0].longitude);
	        tour.latitude = resData[0].latitude
	        tour.longitude = resData[0].longitude
	
			// console.log(req.body.tourDates)
			var newTour	= new Tour({
				creator 	: req.user._id,
				artist		: req.user.local.username,
				tourName 	: req.body.name,
				// tourLogo 	: req.body.tourLogo,
				tourDates	: req.body.tourDates
					})
					// console.log('I was in the NEW tour adder and am going to save')
			newTour.save(function(err, done){
				console.log('saving newTour')
				console.log(err)
				if (err)
					throw err;
					savedTourDates.push(done)
						console.log('saved & pushed to output Array savedTourDates')
					pendingRequests--
					if (pendingRequests == 0) {
						finish()
					}
			})
				})
				.catch(function(err) {
				    console.log(err);
				});
			// res.send({ success: 'success'})
	}

	var savedTourDates = []
	var finish = function(){
		res.send(savedTourDates)
	}

	var pendingRequests = req.body.tourDates.length
	for(var i = 0; i < req.body.tourDates.length; i++) {
		// console.log('I AM IN THE TOUR DATE LOOP', req.body.tourDates[i])
		var tour = req.body.tourDates[i]
			addTourDateData(tour, i)
	}
}

function getDates (req, res){
	var defaultPop = 'Users'
		Tour.find({}, function(err, docs){
			res.send(docs)
			// console.log('This is the Get Dates Controller Result:', docs)
		})
}

module.exports = {	
	createTour 	: createTour,
	getDates 	: getDates
}