

app.controller('gameCtrl', function ($scope, $http) {
	$http.get('apps/data/myData.json').then(function(response)
	{
		$scope.gameDetails = response.data.games;
	})
	$scope.value = function(y)
	{
		$scope.orderme = y;
	}
})