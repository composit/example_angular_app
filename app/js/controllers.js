'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', ['$scope', function($scope) {
    $scope.groupName = 'Ruby';
  }])

  .controller('MembersCtrl', ['$scope', 'Members', function($scope, Members) {
    $scope.members = Members.query();
    $scope.orderProp = 'name';
  }])

  .controller('MemberDetailCtrl', ['$scope', 'notify', '$routeParams', 'Members', function($scope, notify, $routeParams, Members) {

    $scope.member = Members.get({ memberId: $routeParams.memberId });
    $scope.reversed = false;
    
    $scope.reverse = function() {
      $scope.reversed = !$scope.reversed;
    };

    $scope.callNotify = function(msg) {
      notify(msg);
    }
  }]);
