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
            // console.log('GETTING TOUR DATES FROM SERVER:', responseData)
            for (var i = 0; i < responseData.data.length; i++){
                // console.log('in the loop @ i: ', i, responseData.data[i])
                    for (var j = 0; j < responseData.data[i].tourDates.length; j++){
                        // console.log('inside J loop: ', j, responseData.data[i].tourDates[j])
                        $scope.markers.push({
                        tourName    : responseData.data[i].tourName,
                        artist      : responseData.data[i].artist,
                        lat         : responseData.data[i].tourDates[j].latitude,
                        lng         : responseData.data[i].tourDates[j].longitude,
                        date        : responseData.data[i].tourDates[j].date,
                        venue       : responseData.data[i].tourDates[j].venue,
                        addy        : responseData.data[i].tourDates[j].addy,
                        message     : responseData.data[i].artist + '<br>' + responseData.data[i].tourName + '<br>' + responseData.data[i].tourDates[j].date + '<br>' + responseData.data[i].tourDates[j].venue + '<br>' + responseData.data[i].tourDates[j].addy
                        })
                    }
                    // message: "<div ng-include src=\"'./html/localTourInfo.html'\"></div>"
                        
            }
            console.log($scope.markers)

            $scope.page = 0;
            $scope.items = $scope.markers
            $scope.itemsLimit = 6;

            $scope.itemsPaginated = function () {
                var currentPageIndex = $scope.page * $scope.itemsLimit;
                return $scope.markers.slice(
                    currentPageIndex, 
                    currentPageIndex + $scope.itemsLimit);
            };

            $scope.datesLess = function(){
                $scope.page--
            }

            $scope.datesMore = function(){
                $scope.page++
            }
        })
        
}]);