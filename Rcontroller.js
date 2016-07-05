var regionController = angular.module('regionController', ['ngAnimate']);

regionController.controller('RlistController', ['$scope','$http', function ($scope, $http) {
$http.get('regions.js').success(function(data){
$scope.regions = data;//regionController shall make use of the regions.js for all the data

});
}]);

regionController.controller('RdetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('regions.js').success(function(data) {
    $scope.regions = data;
    $scope.whichItem = $routeParams.itemId;
	
	
	if ($routeParams.itemId > 0){
	$scope.prevItem = Number($routeParams.itemId)-1;//switch to the previous item in the list of records
	}
	else{
	$scope.prevItem = $scope.regions.length-1;
	}
	
	if ($routeParams.itemId < $scope.regions.length-1){
	$scope.nextItem = Number($routeParams.itemId)+1;//switch to the next item in the list of records
	}
	else{
	$scope.nextItem = 0;
	}
  });
}]);