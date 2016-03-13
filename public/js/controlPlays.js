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
                colors: [ '#FFF'        , '#FDE9E7'           , '#FCD3CF'           , '#FBBDB8'           , '#F9A8A0'           , '#F89289'           , '#F77C71'           , '#F56759'           , '#F45142'           , '#F33B2A'             , '#F22613'],
                labels: [ '0 - 100,000' , '100,001 - 200,000' , '200,001 - 300,000' , '300,001 - 400,000' , '400,001 - 500,000' , '500,001 - 600,000' , '600,001 - 700,000' , '700,001 - 800,000' , '800,001 - 900,000' , '900,001 - 1,000,000' , '1,000,001+']
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
      console.log('got JSON PLAYS from server')
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
                  if (feature.properties.listeners < 100000) {
                    myStyles.fillColor = "#FFF"
                  }
                  else if (feature.properties.listeners >= 100000 && feature.properties.listeners <= 200000) {
                    myStyles.fillColor = "#FDE9E7"
                  }
                  else if (feature.properties.listeners >= 200000 && feature.properties.listeners <= 300000) {
                    myStyles.fillColor = "#FCD3CF"
                  }
                  else if (feature.properties.listeners >= 300000 && feature.properties.listeners <= 400000) {
                    myStyles.fillColor = "#FBBDB8"
                  }
                  else if (feature.properties.listeners >= 400000 && feature.properties.listeners <= 500000) {
                    myStyles.fillColor = "#F9A8A0"
                  }
                  else if (feature.properties.listeners >= 500000 && feature.properties.listeners <= 600000) {
                    myStyles.fillColor = "#F89289"
                  }
                  else if (feature.properties.listeners >= 600000 && feature.properties.listeners <= 700000) {
                    myStyles.fillColor = "#F77C71"
                  }
                  else if (feature.properties.listeners >= 700000 && feature.properties.listeners <= 800000) {
                    myStyles.fillColor = "#F56759"
                  }
                  else if (feature.properties.listeners >= 800000 && feature.properties.listeners <= 900000) {
                    myStyles.fillColor = "#F45142"
                  }
                  else if (feature.properties.listeners >= 900000 && feature.properties.listeners <= 1000000) {
                    myStyles.fillColor = "#F33B2A"
                  }
                  else if (feature.properties.listeners >= 1000000) {
                    myStyles.fillColor = "#F33B2A"
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