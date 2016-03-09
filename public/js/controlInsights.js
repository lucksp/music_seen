angular.module('musicSeen')
    .controller('controlInsights',['$scope', '$http', 'factoryInsight', 'leafletData', function($scope, $http, factoryInsight, leafletData){

        $scope.centerJSON = function() {
            leafletData.getMap().then(function(map) {
                var latlngs = [];
                for (var i in $scope.geojson.data.features[0].geometry.coordinates) {
                    var coord = $scope.geojson.data.features[0].geometry.coordinates[i];
                    for (var j in coord) {
                        var points = coord[j];
                        for (var k in points) {
                            latlngs.push(L.GeoJSON.coordsToLatLng(points[k]));
                        }
                    }
                }
                map.fitBounds(latlngs);
            });
        };

        $http.get("api/lib").success(function(data, status) {
            angular.extend($scope, {
                geojson: {
                    data: data,
                    style: {
                        fillColor: '#5a5a5a',
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        // dashArray: '3',
                        fillOpacity: 0.7
                    }
                }
            });
        });
}]);