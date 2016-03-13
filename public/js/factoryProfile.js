angular.module('musicSeen')
	.factory('factoryProfile', ['$resource', function($resource){

	var User = $resource('/profile', {username : 'username'})
	console.log(User)
		return {
				User 	:  User
			}
		
}]);