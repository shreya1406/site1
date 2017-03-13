/// <reference path="../js/angular.js" />

var app1 = angular.module("module1",[]);
app1.controller("site1", function alerting_func($rootScope) {
	$rootScope.alerting = function() {
		alert($rootScope.username);
	};
})