var myApp = angular.module('myApp', [
  'ngRoute',
  'teamController', 'cityController', 'regionController', 'mapController''ngMap'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/Teams', {
    templateUrl: 'list.html',
    controller: 'ListController'
  }).
    when('/Regions', {
    templateUrl: 'Rlist.html',
    controller: 'RlistController'
  }).
    when('/Cities', {
    templateUrl: 'Clist.html',
    controller: 'ClistController'
  }).
  
    when('/list', {
    templateUrl: 'MapShow.html',
    controller: 'MListController'
  }).
   when('/Tdetails/:itemId', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  }).
     when('/Rdetails/:itemId', {
    templateUrl: 'Rdetails.html',
    controller: 'RdetailsController'
  }).
     when('/Cdetails/:itemId', {
    templateUrl: 'Cdetails.html',
    controller: 'CdetailsController'
  }).
  otherwise({
    redirectTo: '/Teams'
  });
}]);