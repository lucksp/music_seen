angular.module('musicSeen')
    .controller('controllMusicSeen',['$scope', '$http', 'insightFactory', function($scope, $http, insightFactory){

// POST NEW REGISTRATION DATA
$scope.register = function(){
    $http({
                method : 'POST',
                url    : '/success',
                data   : $scope.registerForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/profile" }
            })
}


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


// PROFILE UPDATES
$scope.updateForm = true
$scope.updateAdded = false
$scope.profileUpdate = function(){
    $scope.updateForm = !$scope.updateForm,
    $scope.updateAdded = !$scope.updateAdded
}

$scope.profileUpdate = function(){
    $http({
                method : 'POST',
                url    : '/update',
                data   : $scope.update
    }).then(function(returnData){
        // console.log(returnData)
        // if(returnData.data.success)
    })
}


// TOUR UPDATES
$scope.tourData = function(){
    $http({
                method : 'POST',
                url    : '/tours',
                data   : $scope.tour
    }).then(function(returnData){
        // console.log(returnData)
        // if(returnData.data.success)
    })
}

$scope.tourForm = true
$scope.tourAdded = false
$scope.tours = function(){
    $scope.tourForm = !$scope.tourForm,
    $scope.tourAdded = !$scope.tourAdded
}

}]);