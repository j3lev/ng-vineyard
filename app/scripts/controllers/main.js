'use strict';

/**
 * @ngdoc function
 * @name ngVineyardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngVineyardApp
 */
angular.module('ngVineyardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
