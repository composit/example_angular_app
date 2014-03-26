'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/members/:memberId', {templateUrl: 'partials/member-detail.html', controller: 'MemberDetailCtrl'});
  $routeProvider.when('/members', {templateUrl: 'partials/members.html', controller: 'MembersCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
