// REQUIRES
var db 				= require('../app/models/userModel.js')
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('./apiKey.txt', 'utf-8')
var country			= require('../app/models/countries.geo.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

lfm.track.getTopTags({
	mbid: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9'
}, function(err, topTags){
	if (err) {
    return console.log('OMG!', err);
  }
  	console.log(topTags.tag);
})




for(var i = 0; i < country.features.length; i++){
		var countryName = country.features[i].properties.name
		countryMatches(countryName)
	}

module.exports = {
	countryTopTracks : countryMatches
}
