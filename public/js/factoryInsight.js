angular.module('musicSeen')
	.factory('factoryInsight', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('/api/lib')
			}
		}

}]);