
angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController', ['$scope', '$http', function($scope, $http){


$scope.response = {}
	$http.get('https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=ba521ca99affd724697f4fb794058a432c3ecf0f&outputMode=json&outputMode=json&start=now-7d&end=now&maxResults=1&return=enriched,original').then(function(response){
		$scope.response = response;
		console.log($scope.response)
	}, function(error){
		console.log(error)
	});
console.log($scope.response)
}])