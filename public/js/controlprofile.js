angular.module('musicSeen')
    .controller('controlProfile',['$scope', '$http', function($scope, $http){

	$http.get('/profile').then(function(responseUserData){
		// console.log('PROFILE RESPONSE DATA', responseUserData.data.user)

		$scope.user = responseUserData.data.user
	})

	$scope.tour = {
		tourDates: [{}]
	}

	$scope.tourForm = true
	$scope.arrowUp = true
	$scope.arrowDown = true
	$scope.addTour = function(){
		$scope.tourForm = !$scope.tourForm
		$scope.arrowUp = !$scope.arrowUp
		$scope.arrowDown = !$scope.arrowDown
	}

	$scope.tourAdded = true
	$scope.createTour = function(){
		console.log('$scope.tour ===', $scope.tour)
		$http({
	                method : 'POST',
	                url    : '/tours',
	                data   : $scope.tour
	            }).then(function(returnData){
	                console.log('CreateTour() : returnData.data', returnData.data)
	                if ( returnData.data.error ){
	                	$scope.error = 'The tour did not submit'
	                	console.log($scope.error)
	                }
	                if ( returnData.data.success ) {
	                	 { window.location.href="#/profile/" }
	                } 
	            })
	          $scope.tourAdded = !$scope.tourAdded

	          $scope.tour = {}
	          $scope.tour.tourDates = [{}]
	}

	$scope.addMoreDates = function(){
		$scope.tour.tourDates.push({})
	}

	$scope.profileTourData = []
	$http.get('/tourDates').then(function (responseTourData) {
	    console.log('TOUR DATE RESPONSE DATA:', responseTourData)
	    for (var i = 0; i < responseTourData.data.length; i++){
	    		console.log('User ID = ', $scope.user._id, 'Creator ID =', responseTourData.data[i].creator)
	    	if ($scope.user._id === responseTourData.data[i].creator){
	            $scope.profileTourData.push({
	                tourName	: responseTourData.data[i].tourName,
	                artist		: responseTourData.data[i].artist,
	                date 		: responseTourData.data[i].tourDates
	                })
	            console.log('$scope.profileTourData = ', $scope.profileTourData)
	        }
	    }
	})

	$scope.activeShowing = []
	$scope.showUserTour = function(index){
		var x = $scope.activeShowing.indexOf(index)
		if (x >= 0){
			$scope.activeShowing.splice(x, 1)
		}
		else {
			$scope.activeShowing.push(index)
		}
	}

	$scope.shouldShow = function(index){
		return $scope.activeShowing.indexOf(index) >= 0
	}

}]);