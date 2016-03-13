// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var playsJson 		= require('../app/models/playsjson.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

var playsPerCountry = function (countryName, countryIndex){
// CALL TOP TRACKS BY GEO
	lfm.geo.getTopTracks({
		  country: countryName,
		  limit: 1
		}, function (err, geoTracks) {
		if (err) {
			// console.log(err, name)
		    return 'OMG!', err, countryName;
		}
		else{
			// console.log(countryName, '===', geoTracks.track[0].name, '=====', geoTracks.track[0].listeners)

			playsJson.features[countryIndex].properties.track = geoTracks.track[0].name
			playsJson.features[countryIndex].properties.artist = geoTracks.track[0].artist.name
			playsJson.features[countryIndex].properties.url = geoTracks.track[0].url
			playsJson.features[countryIndex].properties.listeners = geoTracks.track[0].listeners
			var tagString = JSON.stringify(playsJson)
			fs.writeFile('./app/models/playsjson.geo.json', tagString, function(err){
				// console.log(err)
			
		})
		// console.log('playsJson written')
		}
	})
}

for(var i = 0; i < country.features.length; i++){
		var countryName = country.features[i].properties.name
		playsPerCountry(countryName, i)
	}

// module.exports = {
// 	playsPerCountry : playsPerCountry
// }
