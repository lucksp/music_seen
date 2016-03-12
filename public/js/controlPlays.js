angular.module('musicSeen')
    .controller('controlPlays',['$scope', '$http', 'leafletData', function($scope, $http, leafletData){

    angular.extend($scope, {
        center: {
                lat: 27.4086665,
                lng: 1.7576433,
                zoom: 3
                },
        legend: {
                position: 'bottomleft',
                colors: [ '#1F3A93', "#81CFE0"],
                labels: [ '< 250000', '< 500000']
                },
        defaults: {
                scrollWheelZoom: false
                },
        // events: {
        //         map:{
        //             enable: ['click']
        //             logic:  'emit'
        //             }
        //         }
    });

  $scope.playsGeojson = function() {
    $http.get('api/getPlays').success(function(data, status) {
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
                  if (feature.properties.listeners < 250000) {
                    myStyles.fillColor = "#1F3A93"
                  }
                  else if (feature.properties.genre === 'indie') {
                    myStyles.fillColor = "#81CFE0"
                  }
                  return myStyles
                }
              }
          });
      })
  }

  $scope.$on('leafletDirectiveMap.click', function(event){
        $scope.eventDetected = "Click";

    });

}]);