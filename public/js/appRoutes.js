angular.module('musicSeen')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				title		: 'Music Seen | Music Scene',
				templateUrl : '/html/index.html',
				controller	: 'controlHome',
				css			: 'indexOnly.css'
			})
			.when('/insights', {
				title		: 'Music Seen | Music Scene: See Your Music on a Map',
				templateUrl : '/html/insights.html',
				controller	: 'controlInsights',
				css			: 'styles.css'
			})
			.when('/locals', {
				title		: 'Music Seen | Music Scene: Find Your Music Scene',
				templateUrl : '/html/locals.html',
				controller	: 'controlLocals'
			})
			.when('/login', {
				title		: 'Music Seen | Music Scene: Login',
				templateUrl : '/html/login.html',
				controller	: 'controlLogin'
			})
			.when('/register', {
				title		: 'Music Seen | Music Scene: Register',
				templateUrl : '/html/register.html',
				controller	: 'controlRegister'
			})
			.when('/profile/', {
				title		: 'Music Seen | Music Scene: Welcome!',
				templateUrl : '/html/profile.html',
				controller	: 'controlProfile'
			})
	}])