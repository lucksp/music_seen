angular.module('musicSeen')
    .controller('controlHome',['$scope', '$http', function($scope, $http){
    	
    	$scope.login = function(){
    		console.log('login function running')
    	    $http({
    	                method : 'POST',
    	                url    : '/login',
    	                data   : $scope.loginForm
    	            }).then(function(returnData){
    	                // console.log(returnData)
    	                    if ( returnData.data.error ){
    	                        $scope.error = returnData.data.error
    	                        console.log($scope.error)
    	                    }
    	                    if ( returnData.data.success ) {
    	                    	$('#logInBtn').on('submit', function() {
    	                    	  $('#logInModal').modal('hide');
    	                    	});
    	                         { window.location.href="#/profile" }
    	                    } 
    	            })
    	}

    	$scope.register = function(){
    	    $http({
    	                method : 'POST',
    	                url    : '/register',
    	                data   : $scope.registerForm
    	            }).then(function(returnData){
    	                // console.log(returnData)
    	                if ( returnData.data.error ){
    	                	window.location.href="#/register"
    	                }
    	                if ( returnData.data.success ) {
    	                	 { window.location.href="#/profile/" }
    	                } 
    	            })
    	}

}]);