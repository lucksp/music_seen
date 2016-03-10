angular.module('musicSeen')
    .controller('controlLogin',['$scope', '$http', function($scope, $http){

// POST LOGIN OF EXISTING USER DATA
$scope.login = function(){
	console.log('login function running')
    $http({
                method : 'POST',
                url    : '/login',
                data   : $scope.loginForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { 
                	window.location.href="#/profile" 
                }
                else {
                	console.log('Could not log in because', returnData)
                }
            })
}

}]);