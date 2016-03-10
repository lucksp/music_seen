angular.module('musicSeen')
    .controller('controlInsights',['$scope', '$http', 'factoryInsight', 'leafletData', function($scope, $http, factoryInsight, leafletData){
        
    angular.extend($scope, {
        center: {
                lat: 27.4086665,
                lng: 1.7576433,
                zoom: 2
            },
        legend: {
                position: 'bottomleft',
                colors: [ '#1F3A93',  '#81CFE0',  '#BF55EC',               '#F2784B', '#D91E18',  '#87D37C',  '#2C3E50'],
                labels: [ 'Rock',     'Indie',    'Love at First Listen',  'World', 'BritPop',  'AltRock',    'Metal']
                },
        defaults: {
                scrollWheelZoom: false
        }
    });

$scope.updateGeojson = function() {
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
                  if (feature.properties.genre === 'love at first listen'){  
                    myStyles.fillColor = '#BF55EC'
                  }
                  else if (feature.properties.genre === 'rock') {
                    myStyles.fillColor = "#1F3A93"
                  }
                  else if (feature.properties.genre === 'indie') {
                    myStyles.fillColor = "#81CFE0"
                  }
                  else if (feature.properties.genre === 'indie rock') {
                    myStyles.fillColor = "#81CFE0"
                  }
                  else if (feature.properties.genre === 'Hip-Hop') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'rap') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'r&b') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'soul') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'femail vocalists') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'dubstep') {
                    myStyles.fillColor = "#F2784B"
                  }
                  else if (feature.properties.genre === 'britpop') {
                    myStyles.fillColor = "#D91E18"
                  }
                  else if (feature.properties.genre === 'alternative') {
                    myStyles.fillColor = "#87D37C"
                  }
                  else if (feature.properties.genre === 'metal') {
                    myStyles.fillColor = "#87D37C"
                  }
                  return myStyles
                }
              }
          });
      })
  }
          // $scope.updateGeojson = function() {
          //   $scope.geojson.data = $http.get('api/getTags').success(function(data, status) {
          //     if (feature.properties.genre === 'rock'){  
          //       myStyles.fillColor = "green"
          //     }
          //     return myStyles
          //   }
          // )};


  

}]);