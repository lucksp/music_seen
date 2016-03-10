// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var tagJson 		= require('../app/models/tagjson.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});
// console.log(tagJson.features)
var countryMatches = function (countryName, countryIndex){
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
// CALL TOP TAGS BY TRACK BASED ON GEO ABOVE
					// console.log(countryName,'=====', geoTracks.track[0].name)
					// console.log(countryName,'=====', geoTracks.track[0].artist.name)
				lfm.track.getTopTags({
					track: geoTracks.track[0].name,
					artist: geoTracks.track[0].artist.name
				}, function(err, topTags){
					if (err){
						return 'TOP TAGS ERROR',err
						console.log('TOP TAGS ERROR', err)
					}
					// console.log(countryName, geoTracks.track[0].name, '====', topTags.tag)
					// console.log('====', countryName, geoTracks.track[0].name, geoTracks.track[0].artist.name, topTags.tag[0].name)
		//  WRITE TAG RESULTS TO JSON FILE 

					tagJson.features[countryIndex].properties.genre = topTags.tag[0].name
					tagJson.features[countryIndex].properties.url = geoTracks.track[0].url
					var tagString = JSON.stringify(tagJson)
					fs.writeFile('./app/models/tagjson.geo.json', tagString, function(err){
						// console.log(err)
					})
					// console.log('tagJson written')

				})
			}
		})
	}


for(var i = 0; i < country.features.length; i++){
		var countryName = country.features[i].properties.name
		countryMatches(countryName, i)
	}

module.exports = {
	countryTopTags : countryMatches
}

		// else {
		// 	lfm.chart.getTopTracks({
		// 		limit: 3
		// 	},function(err, chartTracks){
		// 		if(err){
		// 			// console.log(err)
		// 			return 'chartTopTracks did not run', err
		// 		}
		// 		else {
		// 			console.log(countryName, 'top Tracks ===', chartTracks.track[0].name, 'has playcount ===', chartTracks.track[0].playcount)
		// 			// console.log(countryName, 'top Tracks ===', geoTracks.track)

		// 				// console.log('geoTracks', geoTracks.track[0].name, 'chartTracks', chartTracks.track[0].name)
						
		// 				// if (geoTracks.track[0].name === chartTracks.track[0].name || geoTracks.track[1].name === chartTracks.track[1].name || geoTracks.track[2].name === chartTracks.track[2].name){
		// 				// 		country.features.properties.track1 		= geoTracks.track[0].name,
		// 				// 		country.features.properties.playcount1 	= chartTracks.track[0].playcount,
		// 				// 		country.features.properties.playLink1 	= geoTracks.track[0].url,
		// 				// 						// console.log(country.features.properties)
		// 				// }
		// 			}	
				// }
			// )}