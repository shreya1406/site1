/// <reference path="../js/angular.js" />

var app = angular.module("myModule",[]);
var login = function ($scope) {
	var login_params = {
		username : "",
		password : ""
	}
	
	$scope.login_params = login_params;
	$scope.enter_login = function(login_params) {
		if ((login_params.username == 'shreya' && login_params.password == '12345') || (login_params.username == 'lomadi' && login_params.password == '23456')) {
			window.location = '../htmls/site.html';
		}
		else {
			alert("Wrong Credentials");
		}
	}
}

app.controller("login", login);

