var Tour 				= require('../app/models/tourModel.js')
var User 				= require('../app/models/userModel.js')
var async 				= require('async')
var geocoderProvider 	= 'google'
var httpAdapter 		= 'http'
var geocoder 			= require('node-geocoder')(geocoderProvider, httpAdapter);

function createTour(req, res){

	var tour = req.body
	var tourGeoActions = []

	for(var i = 0; i < tour.tourDates.length; i++) {
		// console.log('I AM IN THE TOUR DATE LOOP', req.body.tourDates[i])
		var tourDate = tour.tourDates[i];
		(function(tourDate){
			var geoFunction = function(cb){
				geocoder.geocode(tourDate.venue + ', ' + tourDate.addy)
				    .then(function(resData) {
				    	console.log('attempting to GeoCode')
			        	tourDate.latitude 	= resData[0].latitude
			        	tourDate.longitude	= resData[0].longitude
			        	cb(null, 'STRING')
					})
				}
			tourGeoActions.push(geoFunction)
		})(tourDate)
	}
	// console.log('tourGeoActions', tourGeoActions)
	async.series(tourGeoActions, function(){
		var newTour	= new Tour({
			creator 	: req.user._id,
			artist		: req.user.local.artist,
			tourName 	: tour.name,
			tourDates	: tour.tourDates
				})
				// console.log('I was in the NEW tour adder and am going to save')
		newTour.save(function(err, done){
			// console.log('saving newTour')
			console.log(err)
			if (err) {
				throw err;
			}
			else {
				res.send(done)
			}
		})
		// console.log('GeoCoded TourDates:')
	})
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