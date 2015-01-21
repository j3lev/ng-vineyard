'use strict';

angular.module('ngVineyardApp')
	.factory('WineJSONsvc', function($resource) {
	    return $resource("http://localhost:9000/resource/inventory.json"); 
	});