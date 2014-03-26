'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('reversify', function() {
    return function(name) {
      return name.split('').reverse().join('');
    }
  });
