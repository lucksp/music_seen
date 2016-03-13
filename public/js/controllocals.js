// angular.module('musicSeen')
// 	.directive('popup', ['$http', '$compile', function($http, $compile) {
//     return {
//         restrict: 'E',
//         scope: {
//             tourDate: "="
//         },
//         templateUrl: './html/localTourInfo.html'
//     };
// }]);

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
            // console.log(responseData.data.length)
            for (var i = 0; i < responseData.data.length; i++){
                console.log('Adding Marker DATA: Latitude = ',responseData.data[i].tourDates[0].latitude, 'Longitude = ', responseData.data[i].tourDates[0].longitude)
                    $scope.markers.push({
                        title: responseData.data[i].tourDates[0].venue,
                        lat: responseData.data[i].tourDates[0].latitude,
                        lng: responseData.data[i].tourDates[0].longitude,
                        // focus: true,
                        label: {
                                  message: responseData.data[i].tourDates[0].venue,
                                  options: {
                                        noHide: true
                                   }
                        }
                    })
            }
            console.log($scope.markers)

            // Add marker to the markers object
            // $scope.markers[responseData.data[i]] = marker;
        })

        
    	// var promiseDates = ServiceDates.getDates();
     //            $scope.markers = [];
     //            promiseDates.then(function(dates) {
     //                $scope.tourDates = dates.dates;
     //                var i = 0;
     //                angular.forEach($scope.dates, function(date) {
     //                    $scope.markers.push({
     //                        lat: date.latitude, 
     //                        lng: date.longitude, 
     //                        getMessageScope: function() { return $scope; },
     //                        message: "<popup date='dates[" + i + "]'></popup>"
     //                    });
     //                    i++;
     //                });
     //            });
               

}]);