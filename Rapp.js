var myRapp = angular.module('myRapp', [
    'ngRoute',
  'regionController','cityController', 'teamController', 'mapController', 'ngMap'
]);

myRapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/Regions', {
    templateUrl: 'Rlist.html',
    controller: 'RlistController'
  }).
when('/Teams', {
    templateUrl: 'list.html',
    controller: 'ListController'
  }).

    when('/Cities', {
    templateUrl: 'Clist.html',
    controller: 'ClistController'
  }).
  
    when('/list', {
    templateUrl: 'MapShow.html',
    controller: 'MListController'
  }).
   when('/details/:itemId', {
    templateUrl: 'Rdetails.html',
    controller: 'RdetailsController'
  }).
       when('/Rdetails/:itemId', {
    templateUrl: 'Rdetails.html',
    controller: 'RdetailsController'
  }).
     when('/Tdetails/:itemId', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  }).

     when('/Cdetails/:itemId', {
    templateUrl: 'Cdetails.html',
    controller: 'CdetailsController'
  }).
  otherwise({
    redirectTo: '/Regions'
  });
}]);