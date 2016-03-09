var d3 = require('d3')
var fs = require('fs')
var countries = require('app/models/countries.geo.json')


var path = d3.geo.path();

d3.json(countries, function(json) {
        svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path);
           console.log('d3.json function runs')
});

module.exports = {
	d3Countries : countryData
}