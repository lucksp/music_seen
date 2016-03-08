angular.module('musicSeen')
    .controller('controlMusicSeen',['$scope', '$http', function($scope, $http){

// RECEIVE CONFIRM USER IS LOGGED IN TO ACCESS PROFILE
$http.get('/profile')
    .then(function(returnData){
        if(returnData.data.user){
            // The user exists!
        }
        else {
            // No user :(
        }
    })

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