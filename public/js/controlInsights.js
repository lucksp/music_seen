angular.module('musicSeen')
    .controller('controlInsights',['$scope', '$http', 'factoryInsight', function($scope, $http, factoryInsight){


        // factoryInsight.get().then(function(responseData){
        //     $scope.myGeoJSONPath = responseData.data
        //         console.log('Angular got the geoJson file from server', $scope.myGeoJSONPath)
        //         var map = L.map('map').setView([34.74739, -25], 3);
        //         L.geoJson(responseData, {
        //             clickable: true,
        //             style: defaultStyle
        //         }).addTo(map);
        //     })

        //     var defaultStyle = {
        //         stroke: false,
        //         fill: true,
        //         fillColor: '#5a5a5a',
        //         fillOpacity: 1
        //     }
        //     $.getJSON($scope.myGeoJSONPath,function(data){
        //         console.log('if I see this, $scope.geoJson is running outide GET/THEN')
        //         var map = L.map('map').setView([34.74739, -25], 3);
        //         L.geoJson(data, {
        //             clickable: true,
        //             style: defaultStyle
        //         }).addTo(map);
        //     })
}]);