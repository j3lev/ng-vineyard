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

        $scope.edit = function(index, wine, isNew) {

            var editInstance = $modal.open({
                templateUrl: 'views/partials/modalEditWine.html',
                controller: 'editCtrl',
                size: 'md',
                resolve: {
                    index: function() {
                        return index;
                    },
                    wine: function() {
                        return wine;
                    },
                    isNew: function() {
                        return isNew;
                    }
                }
            });

            editInstance.result.then(function(editedWine) {
                if (isNew) {
                	$scope.wines.push(editedWine);
                	index = $scope.wines.length - 1;
                }
                update(editedWine, index);
            });
        };

        function update(wine, index) {
            $scope.wines[index] = wine;
        }


        $scope.delete = function(index) {
        	$scope.wines.splice(index, 1);
        }
    })

.controller('editCtrl', function($scope, $modalInstance, wine, index, isNew) {

        if (isNew) {
            $scope.CreateOrEdit = "Create New";
            $scope.wine = {
                Name: "",
                Type: "",
                Color: "red",
                Vintage: "",
                ABV: "",
                Characteristics: {
                    Acidity: "",
                    Sweet: "",
                    Fruit: "",
                    Body: ""
                }
            };
        } else {
            $scope.CreateOrEdit = "Edit";
            $scope.wine = angular.copy(wine);
        }
        $scope.wine.Color = $scope.wine.Color.toLowerCase();


        $scope.editSubmit = function() {
            $modalInstance.close($scope.wine);
        }
});