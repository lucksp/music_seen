angular.module('musicSeen')
    .controller('controlProfile',['$scope', '$http', 'factoryProfile', function($scope, $http, factoryProfile){

	$scope.user = factoryProfile.User

	$scope.tour = {
		tourDates: [{}]
	}

	$scope.tourForm = true
	$scope.addTour = function(){
		$scope.tourForm = !$scope.tourForm
	}

	$scope.tourAdded = true

	$scope.createTour = function(){
		console.log($scope.tour)
		$http({
	                method : 'POST',
	                url    : '/tours',
	                data   : $scope.tour
	            }).then(function(returnData){
	                // console.log(returnData.data)
	                if ( returnData.data.error ){
	                	$scope.error = 'The tour did not submit'
	                	console.log($scope.error)
	                }
	                if ( returnData.data.success ) {
	                	 { window.location.href="#/profile" }
	                } 
	            })
	          $scope.tourAdded = !$scope.tourAdded
	          $scope.tourForm = !$scope.tourForm
	}

	$scope.addMoreDates = function(){
		$scope.tour.tourDates.push({})
	}

}]);