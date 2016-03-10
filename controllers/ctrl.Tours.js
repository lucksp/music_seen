var Tour = require('../app/models/tourModel.js')

function createTour(req, res){
	var newTour 		= new Tour({
						creator 	: req.body._id,
						tourName 	: req.body.tourName,
						tourLogo 	: req.body.tourLogo,
						tourDate	: req.body.tourDate,
						venueName	: req.body.venueName,
						venueAddy	: req.body.venueAddy
					})	

						newTour.save(function(err, done){
							console.log('saving newTour')
							if (err)
								throw err;
							return done(null, newTour)
						})
}				

module.exports = {	
	createTour : createTour
}