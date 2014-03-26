'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join("\n"));
        msgs = [];
      }
    };
  }])
  .factory('Members', ['$resource', function($resource) {
    return $resource('members/:memberId.json', {}, {
      query: { method: 'GET', params: { memberId: 'members' }, isArray: true }
    });
  }]);
