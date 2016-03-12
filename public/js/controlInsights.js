angular.module('musicSeen')
    .controller('controlInsights',['$scope', '$http', 'factoryInsight', 'leafletData', function($scope, $http, factoryInsight, leafletData){

      $scope.templates =
          [ { name: 'Select Your Map', 
              url: './html/defaultmap.html'
            },{ name: 'Top Genres', 
              url: './html/genremap.html'
            },
            { name: 'Number of Plays', 
              url: './html/playsmap.html'
            } 
          ];
        $scope.template = $scope.templates[0]

}]);