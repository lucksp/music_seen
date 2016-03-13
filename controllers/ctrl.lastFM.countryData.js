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
					// console.log(countryName, geoTracks.track[0].name, '====: TAG 0', topTags.tag[0], 'TAG 1: ', topTags.tag[1])
					// console.log('====', countryName, geoTracks.track[0].name, geoTracks.track[0].artist.name, topTags.tag[0].name)
		//  WRITE TAG RESULTS TO JSON FILE 
					else if (geoTracks.track[0].name === 'Hello' && geoTracks.track[0].artist.name === 'Adele'){
						tagJson.features[countryIndex].properties.genre = 'soul'
					}

					else if (topTags.tag[0].name === 'love at first listen'){
						tagJson.features[countryIndex].properties.genre = topTags.tag[1].name
					}
					else{
						tagJson.features[countryIndex].properties.track = geoTracks.track[0].name
						tagJson.features[countryIndex].properties.artist = geoTracks.track[0].artist.name
						tagJson.features[countryIndex].properties.genre = topTags.tag[0].name
						tagJson.features[countryIndex].properties.url = geoTracks.track[0].url
						var tagString = JSON.stringify(tagJson)
						fs.writeFile('./app/models/tagjson.geo.json', tagString, function(err){
							// console.log(err)
						
					})
					// console.log('tagJson written')
					}
				})
			}
		})
	}


for(var i = 0; i < country.features.length; i++){
		var countryName = country.features[i].properties.name
		countryMatches(countryName, i)
	}

// module.exports = {
// 	countryTopTags : countryMatches
// }
