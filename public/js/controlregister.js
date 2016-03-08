angular.module('musicSeen')
    .controller('controlRegister',['$scope', '$http', function($scope, $http){

	// POST NEW REGISTRATION DATA
	$scope.register = function(){
	    $http({
	                method : 'POST',
	                url    : '/register',
	                data   : $scope.registerForm
	            }).then(function(returnData){
	                console.log(returnData.data)
	                if ( err ){
	                	window.location.href="#/register"
	                }
	                if ( returnData.data.success ) {
	                	 { window.location.href="#/profile" }	
	                } 
	            })
	}
}]);