angular.module('musicSeen')
    .controller('controlGenres',['$scope', '$http', 'leafletData', function($scope, $http, leafletData){

             $scope.$on("leafletDirectiveGeoJson.myMap.click", function(ev, leafletPayload) {
                 countryClick(leafletPayload.leafletObject, leafletPayload.leafletEvent);
             });

             $scope.listenMessage = false

             function countryClick(country, event) {
                $scope.selectedCountry = country.feature
                console.log('I am a click event:', event, 'Country Name =', $scope.selectedCountry.properties)
                $scope.listenMessage = true

             }

             angular.extend($scope, {
                 center: {
                         lat: 27.4086665,
                         lng: 1.7576433,
                         zoom: 3
                         },
                 legend: {
                         position: 'bottomleft',
                         colors: [ '#EC644B',  '#F79342',  '#FBBF37', '#87D37C',  '#22A7F0',  '#4B528A',  '#8154BD', "#D2527F", "#5e5e5e"],
                         labels: [ 'Rock',     'Indie',    'World',   'BritPop',  'AltRock',  'Metal',    'R&B'    , 'Soul'   , 'Other']
                         },
                 defaults: {
                         scrollWheelZoom: false
                         }
             });


              $scope.tagsGeojson = function() {
                $http.get('api/getTags').success(function(data, status) {
                  // console.log(data.features.)
                  console.log('getting API TAGS data')
                    angular.extend($scope, {
                        geojson: {
                            data: data,
                            style: function(feature){
                              var myStyles = {
                                fillColor: '#fff',
                                weight: 1,
                                opacity: 1,
                                color: 'white',
                                fillOpacity: 0.7
                              }
                              console.log(feature.properties.name, '===', feature.properties.genre)

                              if (feature.properties.genre === 'rock') {
                                myStyles.fillColor = "#EC644B"
                              }
                              else if (feature.properties.genre === 'indie') {
                                myStyles.fillColor = "#F79342"
                              }
                              else if (feature.properties.genre === 'indie rock') {
                                myStyles.fillColor = "#F79342"
                              }
                              else if (feature.properties.genre === 'soul') {
                                myStyles.fillColor = "#D2527F"
                              }
                              else if (feature.properties.genre === 'Hip-Hop') {
                                myStyles.fillColor = "#FBBF37"
                              }
                              else if (feature.properties.genre === 'rap') {
                                myStyles.fillColor = "#FBBF37"
                              }
                              else if (feature.properties.genre === 'femail vocalists') {
                                myStyles.fillColor = "#FBBF37"
                              }
                              else if (feature.properties.genre === 'dubstep') {
                                myStyles.fillColor = "#FBBF37"
                              }
                              else if (feature.properties.genre === 'britpop') {
                                myStyles.fillColor = "#87D37C"
                              }
                              else if (feature.properties.genre === 'alternative') {
                                myStyles.fillColor = "#22A7F0"
                              }
                              else if (feature.properties.genre === 'metal') {
                                myStyles.fillColor = "#4B528A"
                              }
                              else if (feature.properties.genre === 'r&b') {
                                myStyles.fillColor = "#8154BD"
                              }
                              else if (feature.properties.genre === undefined ) {
                                myStyles.fillColor = "#000"
                              }
                              else {
                                myStyles.fillColor = "#5e5e5e"
                              }
                              return myStyles
                            }
                          }
                    });
                  })
                }
}]);