'use strict';


angular.module('ngVineyardApp')
	.controller('WineListCtrl', function($scope, $modal, WineJSONsvc) {
		
		$scope.wines = [];
		$scope.wineIndex = null;
		$scope.editValues = [];
		
		WineJSONsvc.query(function(res){
			$scope.wines = res;
		}, function(err){
			console.log(err);
		});
		
		$scope.makeSelected = function(index, name, color, abv, type, vintage) {
			$scope.editName = name;
			$scope.editColor = color;
			$scope.editABV = abv;
			$scope.editType = type;
			$scope.editVintage = vintage;
			$scope.wineIndex = index;
		}

		$scope.sendIt = function(name, color, abv, type, vintage) {
			$scope.wines[$scope.wineIndex].Name = name;
		}

	});