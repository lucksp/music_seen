// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

	var countryData = function (name){
		lfm.geo.getTopTracks({
			  country: name,
			  limit: 5
			}, function (err, tracks) {
			if (err) {
			    return console.log('OMG!', err, name);
			}
			  // console.log(name, tracks.track);
			})
	}
	for(var i = 0; i < country.features.length; i++){
		var name = country.features[i].properties.name
		countryData(name)
	}

module.exports = {
	countryTopTracks : countryData
}

// lfm.geo.getMetros({ 
// 	country: 'Canada'
// 	}, function(err, metros){
// 	if(err) {
// 		console.log('the error message is:', err)
// 	}
// 	console.log(metros)
// })