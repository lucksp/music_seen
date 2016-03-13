angular.module('musicSeen')
	.factory('factoryLocal', ['$resource', '$http', '$q', function($resource, $http, $q){

		// return {
		// 	gettourDates: {
		// 		var data = $q.defer()
		// 			var output = { dates: [], selectedDate: null }	
		// 				$http.get('/tourDates')
		// 					.then(function(responseData){
		// 						angular.forEach(responseData, function(date){
		// 							if (output.selectedDate === null){
		// 								output.selectedDate = date.date
		// 							}
		// 							output.dates.push(date)
		// 						})
		// 						data.resolve(output)
		// 				})
		// 				.error(function(msg, code){
		// 					data.reject(msg)
		// 				})
		// 				return data.promise
		// 	}
		// }
}]);