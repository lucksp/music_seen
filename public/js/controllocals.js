angular.module('musicSeen')
    .controller('controlLocals',['$scope', '$http', function($scope, $http){
        
        angular.extend($scope, {
            center: {
                autoDiscover: true,
                zoom: 10
            },
            defaults: {
                    scrollWheelZoom: false
            }
        });

        $scope.markers = []
        $http.get('/tourDates').then(function (responseData) {
            console.log(responseData)
            for (var i = 0; i < responseData.data.length; i++){
                // console.log('Adding Marker DATA: Latitude = ',responseData.data[i].tourDates[0].latitude, 'Longitude = ', responseData.data[i].tourDates[0].longitude)
                    $scope.markers.push({
                        tourName: responseData.data[i].tourName,
                        artist: responseData.data[i].artist,
                        lat: responseData.data[i].tourDates[0].latitude,
                        lng: responseData.data[i].tourDates[0].longitude,
                        date: responseData.data[i].tourDates[0].date,
                        venue: responseData.data[i].tourDates[0].venue,
                        addy: responseData.data[i].tourDates[0].addy,
                        message: responseData.data[i].artist + '<br>' + responseData.data[i].tourName + '<br>' + responseData.data[i].tourDates[0].date + '<br>' + responseData.data[i].tourDates[0].venue + '<br>' + responseData.data[i].tourDates[0].addy
                        // message: "<div ng-include src=\"'./html/localTourInfo.html'\"></div>"
                        })
            }
            // console.log('$scope.markers: ', $scope.markers)
        })
}]);