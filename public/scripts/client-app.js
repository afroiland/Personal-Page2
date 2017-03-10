var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/writings', {
      templateUrl: '/views/templates/writings.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/apps', {
      templateUrl: '/views/templates/apps.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
