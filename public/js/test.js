angular.module('musicSeen')
    .controller('controlGenres',['$scope', '$http', 'leafletData', function($scope, $http, leafletData){
     
     $scope.$on("leafletDirectiveGeoJson.myMap.mouseover", function(ev, leafletPayload) {
                countryMouseover(leafletPayload.leafletObject.feature, leafletPayload.leafletEvent);
            });

            $scope.$on("leafletDirectiveGeoJson.myMap.click", function(ev, leafletPayload) {
                countryClick(leafletPayload.leafletObject, leafletPayload.leafletEvent);
            });

            var countryProperties= {
                    "Rock": {
                            name: 'Rock',
                            colors: [ '#EC644B']
                    },
                    "Indie": {
                            name: 'Indie',
                            colors: [ '#F79342']
                    },
                    "World": {
                            name: 'World',
                            colors: [ '#FBBF37']
                    },
                    "BritPop": {
                            name: 'BritPop',
                            colors: [ '#FBBF37']
                    },
            };

            angular.extend($scope, {
                    center: {
                            lat: 27.4086665,
                            lng: 1.7576433,
                            zoom: 3
                            },
                    legend: {
                            position: 'bottomleft',
                            colors: [ '#EC644B',  '#F79342',  '#FBBF37', '#87D37C',  '#22A7F0',  '#4B528A',  '#8154BD', "#D2527F"],
                            labels: [ 'Rock',     'Indie',    'World',   'BritPop',  'AltRock',  'Metal',    'R&B'    , 'Soul']
                            },
                    defaults: {
                            scrollWheelZoom: false
                            }
                });

            function countryClick(country, event) {
                country = country.feature;
                console.log(country.properties.name);
            }

            // Get a country paint color from the continents array of colors
            function getColor(country) {
                if (!country || !country["region-code"]) {
                    return "#FFF";
                }

                var colors = countryProperties[country["region-code"]].colors;
                var index = country["alpha-3"].charCodeAt(0) % colors.length ;
                return colors[index];
            }

            function style(feature) {
                return {
                    fillColor: getColor($scope.countries[feature.id]),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            }

            // Mouse over function, called from the Leaflet Map Events
            function countryMouseover(feature, leafletEvent) {
                var layer = leafletEvent.target;
                layer.setStyle({
                    weight: 2,
                    color: '#666',
                    fillColor: 'white'
                });
                layer.bringToFront();
                $scope.selectedCountry = feature;
                console.log(feature);
            }

            // Get the countries data from a JSON
            $http.get('api/getTags').success(function(data, status) {

                // Put the countries on an associative array
                $scope.countries = {};
                for (var i=0; i< data.length; i++) {
                    var country = data[i];
                    $scope.countries[country['name']] = country;
                }

                // Get the countries geojson data from a JSON
                $http.get("json/countries.geo.json").success(function(data, status) {
                    angular.extend($scope, {
                        geojson: {
                            data: data,
                            style: style,
                            resetStyleOnMouseout: true
                        },
                        selectedCountry: {}
                    });
                });
            });

            $scope.tagsGeojson = function() {
                $http.get('api/getTags').success(function(data, status) {
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
                              return myStyles
                            }
                            // selectedCountry: {}
                          }
                      });
                  })
              }

    }]);