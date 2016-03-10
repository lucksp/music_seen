angular.module('musicSeen')
	.factory('factoryProfile', ['$resource', function($resource){

	var User = $resource('/profile/:username', {username : 'username'})

		return {
				User 	:  User
			}
		
}]);