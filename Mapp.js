var myMApp = angular.module('myMApp', [
  'ngRoute',
  'mapController',  'cityController', 'regionController','teamController', 'ngMap'
]);

myMApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'MapShow.html',
    controller: 'MListController'
  }).
   when('/Cities', {
    templateUrl: 'Clist.html',
    controller: 'ClistController'
  }).
  when('/Teams', {
    templateUrl: 'list.html',
    controller: 'ListController'
  }).
    when('/Regions', {
    templateUrl: 'Rlist.html',
    controller: 'RlistController'
  }).

   when('/details/:itemId', {
    templateUrl: 'Cdetails.html',
    controller: 'CdetailsController'
  }).
    when('/Cdetails/:itemId', {
    templateUrl: 'Cdetails.html',
    controller: 'CdetailsController'
  }).
     when('/Tdetails/:itemId', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  }).
     when('/Rdetails/:itemId', {
    templateUrl: 'Rdetails.html',
    controller: 'RdetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);