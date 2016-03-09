// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

var matchingCountry = {}

// console.log(matchingCountry.countryName)
var countryMatches = function (countryName){
		matchingCountry[countryName] = {}
	lfm.geo.getTopTracks({
		  country: countryName,
		  limit: 3
		}, function (err, geoTracks) {
		if (err) {
			// console.log(err, name)
		    return 'OMG!', err, countryName;
		}
		else {
			lfm.chart.getTopTracks({
				limit: 3
			},function(err, chartTracks){
				if(err){
					// console.log(err)
					return 'chartTopTracks did not run', err
				}
				else {
						// console.log('geoTracks', geoTracks.track[0].name, 'chartTracks', chartTracks.track[0].name)
						
						if (geoTracks.track[0].name === chartTracks.track[0].name || geoTracks.track[1].name === chartTracks.track[1].name || geoTracks.track[2].name === chartTracks.track[2].name)
						{
						country.properties.track1 = geoTracks.track[0].name
						// matchingCountry[countryName].playLink1 = geoTracks.track[0].url
						// matchingCountry[countryName].track2 = geoTracks.track[1].name
						// matchingCountry[countryName].playLink2 = geoTracks.track[1].url
						// matchingCountry[countryName].track3 = geoTracks.track[2].name
						// matchingCountry[countryName].playLink3 = geoTracks.track[2].url
						}
					console.log(matchingCountry)
				}
			})	
		}
	})
}


for(var i = 0; i < country.features.length; i++){
		var countryName = country.features[i].properties.name
		countryMatches(countryName)
	}

module.exports = {
	countryTopTracks : countryMatches
}
