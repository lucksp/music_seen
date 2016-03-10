// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

// console.log(matchingCountry.countryName)
// var countryMatches = function (countryName){
// lfm.chart.getTopTracks({}), function(err, tracks){
// 			if(err){
// 				console.log(err)
// 			}
			
	// lfm.geo.getTopTracks({
	// 	  country: countryName,
	// 	  limit: 3
	// 	}, function (err, geoTracks) {
	// 	if (err) {
	// 		// console.log(err, name)
	// 	    return 'OMG!', err, countryName;
	// 	}
	// 	else {
	// 		lfm.chart.getTopTracks({
	// 			limit: 3
	// 		},function(err, chartTracks){
	// 			if(err){
	// 				// console.log(err)
	// 				return 'chartTopTracks did not run', err
	// 			}
	// 			else {
	// 				console.log(countryName, 'top Tracks ===', chartTracks.track[0].name, 'has playcount ===', chartTracks.track[0].playcount)
	// 				// console.log(countryName, 'top Tracks ===', geoTracks.track)

	// 					// console.log('geoTracks', geoTracks.track[0].name, 'chartTracks', chartTracks.track[0].name)
						
	// 					// if (geoTracks.track[0].name === chartTracks.track[0].name || geoTracks.track[1].name === chartTracks.track[1].name || geoTracks.track[2].name === chartTracks.track[2].name){
	// 					// 		country.features.properties.track1 		= geoTracks.track[0].name,
	// 					// 		country.features.properties.playcount1 	= chartTracks.track[0].playcount,
	// 					// 		country.features.properties.playLink1 	= geoTracks.track[0].url,
	// 					// 						// console.log(country.features.properties)
	// 					// }
	// 				}	
	// 			}
	// 		)}
	// 	})
	// }


// for(var i = 0; i < country.features.length; i++){
// 		var countryName = country.features[i].properties.name
// 		countryMatches(countryName)
// 	}

// module.exports = {
// 	// countryTopTracks : countryMatches
// 	chartTopTracks : chartTopTracks
// }
