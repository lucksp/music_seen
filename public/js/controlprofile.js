angular.module('musicSeen')
    .controller('controlProfile',['$scope', '$http', function($scope, $http){

    // var logout = function(){
    // 	$http({
	   //              method : 'POST',
	   //              url    : '/logout',
	   //          }).then(function(returnData){
	   //          	if ( returnData.data.success ) {
	   //              	 { window.location.href="/" }
	   //              }
	   //          })
    // }

	var Hero = $resource('/api/heroes/:id', {id : '@_id'})

    	$scope.user = 

}]);