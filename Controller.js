var teamController = angular.module('teamController', ['ngAnimate']);

teamController.controller('ListController', ['$scope','$http', function ($scope, $http) {
$http.get('teams.js').success(function(data){
$scope.teams = data;//Controller shall make use of the teams.js for all the data

});
}]);

teamController.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('teams.js').success(function(data) {
    $scope.teams = data;
    $scope.whichItem = $routeParams.itemId;
	
	
	if ($routeParams.itemId > 0){
	$scope.prevItem = Number($routeParams.itemId)-1;//switch to the previous item in the list of records
	}
	else{
	$scope.prevItem = $scope.teams.length-1;
	}
	
	if ($routeParams.itemId < $scope.teams.length-1){
	$scope.nextItem = Number($routeParams.itemId)+1;//switch to the next item in the list of records
	}
	else{
	$scope.nextItem = 0;
	}
  });
}]);


