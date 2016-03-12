angular.module('musicSeen')
    .controller('controlLocals',['$scope', '$http', function($scope, $http){

    	angular.extend($scope, {
                center: {
                    autoDiscover: true,
                    zoom: 10
                }
            });

}]);