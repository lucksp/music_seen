angular.module('musicSeen')
	.factory('insightFactory', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('/api/lib')
			}
		}

}]);