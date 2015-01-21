'use strict';
'use strict';

angular.module('ngVineyardApp')
    .controller('WineListCtrl', function($scope, $modal, WineJSONsvc) {

        $scope.wines = [];
        $scope.wineIndex = null;

        WineJSONsvc.query(function(res) {
            $scope.wines = res;
        }, function(err) {
            console.log(err);
        });


        $scope.edit = function(index, wine) {

	        var editInstance = $modal.open({
	            templateUrl: 'views/partials/modalEditWine.html',
	            controller: 'editCtrl',
	            size: 'sm',
	            resolve: {
	                
	            }
	        });
	    };
	})

	.controller('editCtrl', function($scope, wine, index) {

	});