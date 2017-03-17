/// <reference path="../js/angular.js" />

var login = function ($scope) {
	var login_params = {
		username : "",
		password : ""
	}
	
	
	$scope.login_params = login_params;
	$scope.enter_login = function(login_params) {
		if ((login_params.username == 'shreya' && login_params.password == '12345') || (login_params.username == 'lomadi' && login_params.password == '23456')) {
			$scope.change_div_url('site.html', login_params.username);
		}
		else {
			alert("Wrong Credentials");
		}
	}
	// $rootScope.hello = function(){
	// 	if ($rootScope.login_params.username != "")
	// 		var message = 'Hello' + $rootScope.login_params.username + '!';
	// 		$rootScope.message = message;
	// 	}
	// }
}

app.controller("login", login);

