angular.module('musicSeen')
    .controller('controllMusicSeen',['$scope', '$http', 'musicSeenFactory', function($scope, $http, musicSeenFactory){

        $scope.myGeoJSONPath = musicSeenFactory.get().then(function(responseData){
            // console.log(responseData.data)
            $scope.myGeoJSONPath = responseData.data
        })

        var defaultStyle = {
            stroke: false,
            fill: true,
            fillColor: '#5a5a5a',
            fillOpacity: 1
        }
        $.getJSON($scope.myGeoJSONPath,function(data){
            var map = L.map('map').setView([34.74739, -25], 3);

            L.geoJson(data, {
                clickable: true,
                style: defaultStyle
            }).addTo(map);
        })
}]);