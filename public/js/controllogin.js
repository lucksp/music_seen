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
                    if ( returnData.data.error ){
                        $scope.error = returnData.data.error
                        console.log($scope.error)
                    }
                    if ( returnData.data.success ) {
                         { window.location.href="#/profile" }
                         $scope.loginForm = {}
                    } 
            })
}

}]);