var mapController = angular.module('mapController', ['ngAnimate']);

mapController.controller('MListController', ['$scope','$http', function ($scope, $http) {
$http.get('map.js').success(function(data){
$scope.map = data;

});
}]);

/*teamController.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('teams.js').success(function(data) {
    $scope.teams = data;
    $scope.whichItem = $routeParams.itemId;
	
	
	if ($routeParams.itemId > 0){
	$scope.prevItem = Number($routeParams.itemId)-1;
	}
	else{
	$scope.prevItem = $scope.teams.length-1;
	}
	
	if ($routeParams.itemId < $scope.teams.length-1){
	$scope.nextItem = Number($routeParams.itemId)+1;
	}
	else{
	$scope.nextItem = 0;
	}
  });
}]);*/


