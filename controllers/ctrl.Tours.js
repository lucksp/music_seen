var Tour = require('../app/models/tourModel.js')
var geocoderProvider = 'google'
var httpAdapter = 'http'

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);


function createTour(req, res){
	// console.log(' I AM THE REQ.BODY ON SUBMIT ', req.body.tourDates)

	var addTourDateData = function(tourDates, tourIndex){
			// geocoder.geocode(req.body.tourDates[0].venue + ', ' + req.body.tourDates[0].addy, function(err, resData) {
				geocoder.geocode(tour.venue + ', ' + tour.addy)
				    .then(function(resData) {
				        // console.log('I AM THE resDATA from GEOCODER', resData[0].latitude, resData[0].longitude);
				        tour.latitude = resData[0].latitude
				        tour.longitude = resData[0].longitude
				
		// console.log(req.body.tourDates)
						var newTour	= new Tour({
							creator 	: req.user._id,
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
										res.send(done)
									})
										})
										.catch(function(err) {
										    console.log(err);
										});
	}

	for(var i = 0; i < req.body.tourDates.length; i++) {
		// console.log('I AM IN THE TOUR DATE LOOP', req.body.tourDates[i])
		var tour = req.body.tourDates[i]
			addTourDateData(tour, i)
	}
}

function getDates (req, res){
	console.log(req.params)
	Tour.find({}, function(err, docs){
		res.send(docs)
	})
}

module.exports = {	
	createTour 	: createTour,
	getDates 	: getDates
}