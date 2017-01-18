'use strict';
var demoModule = angular.module('demoApp',[]);

demoModule.controller('demoController', function($scope) {
	$scope.echarts = {};
});

//angular.bootstrap(document, ['demoApp']);