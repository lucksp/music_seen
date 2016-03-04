        var myGeoJSONPath = '/html/countries.geo.json';
        var defaultStyle = {
            stroke: false,
            fill: true,
            fillColor: '#5a5a5a',
            fillOpacity: 1
        }
        $.getJSON(myGeoJSONPath,function(data){
            var map = L.map('map').setView([34.74739, -25], 3);

            L.geoJson(data, {
                clickable: true,
                style: defaultStyle
            }).addTo(map);
        })