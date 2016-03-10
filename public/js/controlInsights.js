angular.module('musicSeen')
    .controller('controlInsights',['$scope', '$http', 'factoryInsight', 'leafletData', function($scope, $http, factoryInsight, leafletData){
        
        angular.extend($scope, {
            center: {
                    lat: 27.4086665,
                    lng: 1.7576433,
                    zoom: 3
                },
            legend: {
                    position: 'bottomleft',
                    colors: [ '#ff0000', '#28c9ff', '#0000ff'],
                    labels: [ 'Track 1', 'Track 2', 'Track 3']
                }
        });

        $http.get("api/lib").success(function(data, status) {
            angular.extend($scope, {
                geojson: {
                    data: data,
                    style: function(feature){
                      console.log('testing features', feature)
                      var myStyles = {
                        fillColor: '#5a5a5a',
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        // dashArray: '3',
                        fillOpacity: 0.7
                      }

                      if (feature.properties.genre == 'rock'){
                        myStyles.fillColor = "green"
                      }
                      return myStyles
                    }
                }
            });
        });


    $scope.updateGeojson = function() {
      
        $scope.geojson.style.fillColor = 'red'
                        
                    // $scope.geojson.data = {
                    //     style: {
                    //         fillColor: 'red'
                    //     }
                                  //     "type": "FeatureCollection",
                                  //     "features": [
                                  //       {
                                  //         "type": "Feature",
                                  //         "properties": {},
                                  //         "geometry": {
                                  //           "type": "Polygon",
                                  //           "coordinates": [
                                  //             [
                                  //               [
                                  //                 -41.8359375,
                                  //                 28.92163128242129
                                  //               ],
                                  //               [
                                  //                 -41.8359375,
                                  //                 38.272688535980976
                                  //               ],
                                  //               [
                                  //                 -26.015625,
                                  //                 38.272688535980976
                                  //               ],
                                  //               [
                                  //                 -26.015625,
                                  //                 28.92163128242129
                                  //               ],
                                  //               [
                                  //                 -41.8359375,
                                  //                 28.92163128242129
                                  //               ]
                                  //             ]
                                  //           ]
                                  //         }
                                  //       }
                                  //     ]
                                  // };
                            }

}]);