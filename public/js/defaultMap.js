angular.module('musicSeen')
    .controller('defaultmap',['$scope', '$http', 'leafletData', function($scope, $http, leafletData){

    angular.extend($scope, {
        center: {
                lat: 27.4086665,
                lng: 1.7576433,
                zoom: 3
                },
        defaults: {
                scrollWheelZoom: false
                }
    });

    $scope.onloadMap = function() {
        $http.get('api/lib').success(function(data, status) {
            angular.extend($scope, {
                geojson: {
                    data: data,
                    style: function(feature){
                      var myStyles = {
                        fillColor: '#5e5e5e',
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7
                  }
              }
          }
        }
      )}
    )}

}]);