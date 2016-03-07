angular.module('musicSeen')
	.factory('musicSeenFactory', ['$http', function($http){

		return {
				get 	: function(){
					return $http.get('/api/lib')
			}
		}

}]);