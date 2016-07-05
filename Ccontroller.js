var cityController = angular.module('cityController', ['ngAnimate']);

cityController.controller('ClistController', ['$scope','$http', function ($scope, $http) {
$http.get('cities.js').success(function(data){
$scope.cities = data;//cityController shall make use of the cities.js for all the data

});
}]);

cityController.controller('CdetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('cities.js').success(function(data) {
    $scope.cities = data;
    $scope.whichItem = $routeParams.itemId;
	
	
	if ($routeParams.itemId > 0){
	$scope.prevItem = Number($routeParams.itemId)-1;//switch to the previous item in the list of records
	}
	else{
	$scope.prevItem = $scope.cities.length-1;
	}
	
	if ($routeParams.itemId < $scope.cities.length-1){
	$scope.nextItem = Number($routeParams.itemId)+1;//switch to the next item in the list of records
	}
	else{
	$scope.nextItem = 0;
	}
  });
}]);