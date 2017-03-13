/// <reference path="../js/angular.js" />

var app = angular.module("myModule",[]);
var login = function ($rootScope) {
	var login_params = {
		username : "",
		password : ""
	}
	
	$rootScope.login_params = login_params;
	$rootScope.enter_login = function(login_params) {
		if ((login_params.username == 'shreya' && login_params.password == '12345') || (login_params.username == 'lomadi' && login_params.password == '23456')) {
			document.body.innerHTML = '';
			alert($rootScope.login_params.username);
		}
		else {
			alert("Wrong Credentials");
		}
	}
	$rootScope.hello = function(){
		var message = 'Hello' + $rootScope.username + '!';
		$rootScope.message = message;
	}
}

app.controller("login", login);

