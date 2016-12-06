app.controller('softwareCtrl', function ($scope, $http) {
	$http.get('apps/data/myData.json').then(function(response)
	{
		$scope.softwareDetails = response.data.softwares;
	})	
	$scope.value = function(y)
	{
		$scope.orderme = y;
	}
})