angular.module('musicSeen')
	.directive('popup', ['$http', '$compile', function($http, $compile) {
    return {
        restrict: 'E',
        scope: {
            tourDate: "="
        },
        templateUrl: 'localTourInfo.html'
    };
}]);

angular.module('musicSeen')
    .controller('controlLocals',['$scope', '$http', 'factoryLocal', function($scope, $http, factoryLocal){

    	angular.extend($scope, {
                center: {
                    autoDiscover: true,
                    zoom: 10
                }
            });

}]);