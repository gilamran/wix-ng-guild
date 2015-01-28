'use strict';

/**
 * @ngdoc function
 * @name wixNgGuildApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wixNgGuildApp
 */
angular.module('wixNgGuildApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://wix-ng-guild.firebaseio.com/');
    var sync = $firebase(ref);
    $scope.data = sync.$asObject();
  });
