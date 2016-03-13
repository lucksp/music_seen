angular.module('musicSeen')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller	: 'controlHome'
			})
			.when('/insights', {
				templateUrl : '/html/insights.html',
				controller	: 'controlInsights',
			})
			.when('/locals', {
				templateUrl : '/html/locals.html',
				controller	: 'controlLocals'
			})
			.when('/login', {
				templateUrl : '/html/login.html',
				controller	: 'controlLogin'
			})
			.when('/register', {
				templateUrl : '/html/register.html',
				controller	: 'controlRegister'
			})
			.when('/profile/', {
				templateUrl : '/html/profile.html',
				controller	: 'controlProfile'
			})
	}])