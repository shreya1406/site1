/// <reference path="../js/angular.js" />

var app = angular.module("myModule",['chart.js']);
var master_controller = function($scope) {
	var div_url = 'login.html';
	$scope.div_url = div_url; 
	$scope.loggedin_user = ""

	$scope.change_div_url = function(address, loggedin_user){
		$scope.div_url = address;
		$scope.loggedin_user = loggedin_user;
	}
}


app.controller("master_controller", master_controller);