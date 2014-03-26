'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('focusOn', [ '$timeout',
    function( $timeout ) {
      return function(scope, element) {
        scope.$watch('changeName', function(value) {
          if (value == true) {
            $timeout( function () {
              element[0].focus();
            });
          };
        });
      };
    }
  ]);
