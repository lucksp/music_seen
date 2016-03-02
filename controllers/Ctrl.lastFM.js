// REQUIRES
var LastfmAPI 		= require('lastfmapi');
var fs 				= require('fs')
var apiKey 			= fs.readFileSync('../apiKey.txt', 'utf-8')
var country			= require('./countries.iso3166.json')
var lfm 			= new LastfmAPI({
						'api_key' : apiKey,
					});

// http://ws.audioscrobbler.com/2.0/?method=geo.getTopTracks&country=United%20States&api_key=55e41733ce0e5741e9315caf921230a1
for(var i = 0; i < country.length; i++){
	console.log('The country is: ', country[i].name)
	lfm.geo.getTopTracks({
	  country: country[i].name,
	  limit: 3
	}, function (err, tracks) {
	  if (err) {
	    return console.log('OMG!', err);
	  }
	  console.log(tracks.track);
	})
};


// Geo.prototype.getMetros = function (country, callback) {
// 	if (typeof callback === 'undefined') { callback = country; country = null; }
// 	var params = null;
// 	if (country) { params = { 'country' : country }; }
// 	var options = defaults.defaultOptions(params, callback, 'metros');
// 	this.lastfm.api.request('geo.getMetros', options);
// };

// lfm.geo.getMetros({ 
// 	country: 'Canada'
// 	}, function(err, metros){
// 	if(err) {
// 		console.log('the error message is:', err)
// 	}
// 	console.log(metros)
// })

// CODE WORKS
// lfm.track.getInfo({
// 	'artist' : 'Poliça',
// 	'track' : 'Wandering Star'
// }, function (err, track) {
// 	if (err) { throw err; }
// 	console.log(track);
// });

