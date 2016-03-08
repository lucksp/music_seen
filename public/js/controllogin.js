angular.module('musicSeen')
    .controller('controlLogin',['$scope', '$http', function($scope, $http){

// POST LOGIN OF EXISTING USER DATA
$scope.login = function(){
    $http({
                method : 'POST',
                url    : '/profile',
                data   : $scope.loginForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/profile" }
            })
}

}]);