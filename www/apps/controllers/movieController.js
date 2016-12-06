app.controller('movieCtrl', function ($scope, $http) {
	$http.get('apps/data/myData.json').then(function(response)
	{
		$scope.movieDetails = response.data.movies;
	})
	
	$scope.value = function(y)
	{
		$scope.orderme = y;
	}
})