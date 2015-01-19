'use strict';


angular.module('ngVineyardApp', [])
  .controller('WineListCtrl', function($scope, $http) {
    $http.get("http://localhost:9000/resource/inventory.json").success(function(response) {
      $scope.wines = response;
      
    });

  });