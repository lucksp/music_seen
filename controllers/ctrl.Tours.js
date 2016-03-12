var Tour = require('../app/models/tourModel.js')

function createTour(req, res){
	console.log(req.body)
	var newTour 		= new Tour({
						creator 	: req.user._id,
						tourName 	: req.body.name,
						// tourLogo 	: req.body.tourLogo,
						tourDates	: req.body.tourDates
						// venueName	: req.body.venue,
						// venueAddy	: req.body.addy
					})	

						newTour.save(function(err, done){
							console.log('saving newTour')
							if (err)
								throw err;
							res.send(done)
						})
}				

module.exports = {	
	createTour : createTour
}