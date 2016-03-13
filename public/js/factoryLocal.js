angular.module('musicSeen')
	.factory('factoryLocal', ['$resource', '$http', '$q', function($resource, $http, $q){

		return {
			gettourDates: {
				var data = $q.defer()
				var dates = 
					$http.get('/tourDates').then(function(responseData){
						$scope.tourDates = responseData.data
						console.log($scope.tourDates)
					})
			}
		}
}]);